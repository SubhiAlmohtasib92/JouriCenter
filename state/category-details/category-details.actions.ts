import { WooCommerceInformation } from '../../constants/config';
import { IProduct } from '../core/core.types';

var base64 = require('base-64'); // install it before use from npm i base-64

export enum ECategoryDetailsActionTypes {
  SET_LOAD_PRODUCTS_BY_CATEGORY_ID = ' [CATEGORY_DETAILS] SET_LOAD_PRODUCTS_BY_CATEGORY_ID',
  SET_LOAD_PRODUCTS_BY_CATEGORY_ID_LOADING = '[CATEGORY_DETAILS] SET_LOAD_PRODUCTS_BY_CATEGORY_ID_LOADING',
}

interface ISetLoadProductsByCategoryID {
  type: ECategoryDetailsActionTypes.SET_LOAD_PRODUCTS_BY_CATEGORY_ID;
  payload: IProduct[];
}

interface ISetLoadProductsByCategoryIDLoading {
  type: ECategoryDetailsActionTypes.SET_LOAD_PRODUCTS_BY_CATEGORY_ID_LOADING;
  payload: boolean;
}

export type CategoryDetailsActions =
  | ISetLoadProductsByCategoryID
  | ISetLoadProductsByCategoryIDLoading;

// Utility Area
const setLoading = (payload: boolean): ISetLoadProductsByCategoryIDLoading => {
  return {
    type: ECategoryDetailsActionTypes.SET_LOAD_PRODUCTS_BY_CATEGORY_ID_LOADING,
    payload: payload,
  };
};

export const setProducts = (
  productList: IProduct[]
): ISetLoadProductsByCategoryID => {
  return {
    type: ECategoryDetailsActionTypes.SET_LOAD_PRODUCTS_BY_CATEGORY_ID,
    payload: productList,
  };
};

const getProductsByCategoryId = (categoryId: number) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      console.log('inside', categoryId);
      const username = WooCommerceInformation.username;
      const password = WooCommerceInformation.password;
      var credentials = base64.encode(username + ':' + password);

      const productsList: IProduct[] = await fetch(
        `${WooCommerceInformation.websiteURL}wp-json/wc/v3/products?category=${categoryId}`,
        {
          method: 'GET',
          headers: { Authorization: `Basic ${credentials}` },
        }
      ).then(async (res) => {
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
                  imageName: image.name,
                };
              }),
              productAttributes: item.attributes,
              productCategories: item.categories.map((category) => {
                return {
                  categoryId: category.id,
                  categoryName: category.name,
                };
              }),
            };
          });
        }
      });

      await dispatch(setProducts(productsList));
      return productsList || [];
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export default {
  getProductsByCategoryId,
};
