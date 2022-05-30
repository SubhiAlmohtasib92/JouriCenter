import { WooCommerceInformation } from '../../constants/config';
import { IProduct } from '../core/core.types';

var base64 = require('base-64'); // install it before use from npm i base-64

export enum EProductDetailsActionTypes {
  SET_LOAD_PRODUCT_BY_PRODUCT_ID = ' [CATEGORY_DETAILS] SET_LOAD_PRODUCT_BY_PRODUCT_ID',
  SET_LOAD_PRODUCT_BY_PRODUCT_ID_LOADING = '[CATEGORY_DETAILS] SET_LOAD_PRODUCT_BY_PRODUCT_ID_LOADING',
}

interface ISetLoadProductByProductId {
  type: EProductDetailsActionTypes.SET_LOAD_PRODUCT_BY_PRODUCT_ID;
  payload: IProduct;
}

interface ISetLoadProductByProductIdLoading {
  type: EProductDetailsActionTypes.SET_LOAD_PRODUCT_BY_PRODUCT_ID_LOADING;
  payload: boolean;
}

export type ProductDetailsActions =
  | ISetLoadProductByProductId
  | ISetLoadProductByProductIdLoading;

// Utility Area
const setLoading = (payload: boolean): ISetLoadProductByProductIdLoading => {
  return {
    type: EProductDetailsActionTypes.SET_LOAD_PRODUCT_BY_PRODUCT_ID_LOADING,
    payload: payload,
  };
};

export const setProduct = (
  productInfo: IProduct
): ISetLoadProductByProductId => {
  return {
    type: EProductDetailsActionTypes.SET_LOAD_PRODUCT_BY_PRODUCT_ID,
    payload: productInfo,
  };
};

const getProductDetailsByProductId = (productId: number) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      // console.log('inside', categoryId);
      const username = WooCommerceInformation.username;
      const password = WooCommerceInformation.password;
      var credentials = base64.encode(username + ':' + password);

      const productsList: IProduct[] = await fetch(
        `${WooCommerceInformation.websiteURL}wp-json/wc/v3/products?include=${productId}`,
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

      await dispatch(setProduct(productsList[0]));
      return productsList || undefined;
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export default {
  getProductDetailsByProductId,
};
