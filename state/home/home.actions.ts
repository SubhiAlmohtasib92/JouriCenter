import { WooCommerceInformation } from '../../constants/config';
import { IProduct } from '../core/core.types';

var base64 = require("base-64"); // install it before use from npm i base-64

export enum EHomeActionTypes {
  SET_CAROUSEL_IMAGES = ' [HOME_SCREEN] SET_CAROUSEL_IMAGES',
  SET_MOST_RECENT_PRODUCTS = '[HOME_SCREEN] SET_MOST_RECENT_PRODUCTS',
  SET_FEATURED_PRODUCTS = ' [HOME_SCREEN] SET_FEATURED_PRODUCTS',
  SET_LOAD_PRODUCTS = ' [HOME_SCREEN] SET_LOAD_PRODUCTS',
  SET_LOADING = ' [HOME_SCREEN] SET_LOADING'
}

interface ISetCarouselImages {
  type: EHomeActionTypes.SET_CAROUSEL_IMAGES;
  payload: string[];
}

interface ISetMostRecentProducts {
  type: EHomeActionTypes.SET_MOST_RECENT_PRODUCTS;
  payload: IProduct[];
}

interface ISetFeaturedProducts {
  type: EHomeActionTypes.SET_FEATURED_PRODUCTS;
  payload: IProduct[];
}

interface ISetLoadProducts {
  type: EHomeActionTypes.SET_LOAD_PRODUCTS;
  payload: IProduct[];
}

interface ISetLoading {
  type: EHomeActionTypes.SET_LOADING;
  payload: boolean;
}

export type HomeActions =
  ISetCarouselImages |
  ISetLoading |
  ISetFeaturedProducts |
  ISetMostRecentProducts |
  ISetLoadProducts;


// Utility Area
const setLoading = (payload: boolean): ISetLoading => {
  return {
    type: EHomeActionTypes.SET_LOADING,
    payload: payload
  };
};

export const setProducts = (productList: IProduct[]): ISetLoadProducts => {
 // console.log('aaa');
  return {
    type: EHomeActionTypes.SET_LOAD_PRODUCTS,
    payload: productList,
  };
};

export const setMostRecent = (productList: IProduct[]): ISetMostRecentProducts => {
//console.log('sliced items', productList);
  return {
    type: EHomeActionTypes.SET_MOST_RECENT_PRODUCTS,
    payload: productList,
  };
};


const loadProducts = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const username = WooCommerceInformation.username;
      const password = WooCommerceInformation.password;
      var credentials = base64.encode(username + ":" + password);

      const productsList: IProduct[] = await fetch(
        `${WooCommerceInformation.websiteURL}wp-json/wc/v3/products`,
        {
          method: 'GET',
          headers: { "Authorization": `Basic ${credentials}` }
        }).then(async (res) => {
          if (res.ok) {
            const myResponse = await res.json();
            return myResponse.map((item) => {
              return {
                productId: item.id,
                productDateCreated: item.date_created,
                productName: item.name,
                productShortDescription: item.short_description,
                productPrice: item.price,
                productRegularPrice: item.regular_price,
                productSalePrice: item.sale_price,
                productOnSale: item.on_sale,
                productImages: item.images.map((image) => {
                  return {
                    imageID: image.id,
                    imageURL: image.src,
                    imageName: image.name
                  }
                }),
                productAttributes: item.attributes,
                productCategories: item.categories.map((category) => {
                  return {
                    categoryId: category.id,
                    categoryName: category.name,
                  }
                }),
                productStockStatus: item.stock_status,
                productStockQuantity: item.stock_quantity,
                productLowStockAmount: item.low_stock_amount
              }
            });
          }
        });
      //console.log('agere0');
      await dispatch(setProducts(productsList));
      await dispatch(setMostRecent(productsList.sort((a, b) => Date.parse(b.productDateCreated) - Date.parse(a.productDateCreated)).slice(0, 4)))
      return productsList || [];
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export default {
  loadProducts,
}