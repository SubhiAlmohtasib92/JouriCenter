// import { RootState } from "..";
// import { appendToken } from "../../auth/cognito";
// import { errorToast, throwHttpError } from "../../errors";
// import { common } from "../../util";

import { WooCommerceInformation } from '../../constants/config';
import { IProductCategory } from './core.types';
var base64 = require("base-64"); // install it before use from npm i base-64

export enum ECoreActionTypes {
  SET_CATEGORIES = 'SET_CATEGORIES',
  SET_WHISH_LIST = 'SET_WHISH_LIST',
  REMOVE_FROM_WISH_LIST = ' REMOVE_FROM_WISH_LIST',
  SET_LOADING = 'SET_LOADING',
  SET_CART_ITEMS = 'SET_CART_ITEMS'
}

// Action definitions
interface ISetCategories {
  type: ECoreActionTypes.SET_CATEGORIES;
  payload: IProductCategory[];
}

interface ISetWhishList {
  type: ECoreActionTypes.SET_WHISH_LIST;
  payload: number;
}

interface ISetLoading {
  type: ECoreActionTypes.SET_LOADING;
  payload: boolean;
}

interface ISetCartItems {
  type: ECoreActionTypes.SET_CART_ITEMS;
  payload: number;
}

interface IRemoveFromWhishList {
  type: ECoreActionTypes.REMOVE_FROM_WISH_LIST;
  payload: number;
}

export type CoreActions =
  ISetCategories |
  ISetWhishList |
  ISetCartItems |
  ISetLoading |
  IRemoveFromWhishList
  ;

// Utility Area if any

// Action Creators
const setCategories = (payload: IProductCategory[]): ISetCategories => {
  return {
    type: ECoreActionTypes.SET_CATEGORIES,
    payload
  };
};

const setLoading = (payload: boolean): ISetLoading => {
  return {
    type: ECoreActionTypes.SET_LOADING,
    payload
  };
};

const setAddItemToCart = (productId: number): ISetCartItems => {
  return {
    type: ECoreActionTypes.SET_CART_ITEMS,
    payload: productId
  };
}

const setAddToWhishList = (productId: number): ISetWhishList => {
  return {
    type: ECoreActionTypes.SET_WHISH_LIST,
    payload: productId
  };
}

const removeItemFromWhishList = (productId: number): IRemoveFromWhishList => {
  return {
    type: ECoreActionTypes.REMOVE_FROM_WISH_LIST,
    payload: productId
  };
}


// Thunk Async Action Creators
const loadCategories = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const username = WooCommerceInformation.username;
      const password = WooCommerceInformation.password;
      var credentials = base64.encode(username + ":" + password);

      const categories: IProductCategory[] = await fetch(
        `${WooCommerceInformation.websiteURL}wp-json/wc/v3/products/categories`,
        {
          method: 'GET',
          headers: { "Authorization": `Basic ${credentials}` }
        }).then(async (res) => {
          if (res.ok) {
            const myResponse = await res.json()
            return myResponse.map((item) => {
              return {
                categoryId: item.id,
                categoryName: item.name,
                categoryImage: item.image,
                categoryMenuOrder: item.menu_order,
              }
            });
          }
        });
      await dispatch(setCategories(categories.sort((a, b) => a.categoryMenuOrder - b.categoryMenuOrder)));

      return categories || [];
    } catch (error) {
      console.error(error);
    } finally {
      await dispatch(setLoading(false));
    }
  };
};

const addItemToCart = (productId: number) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      dispatch(setAddItemToCart(productId));
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(setLoading(false));
    }
  }
};

const addToWhishList = (productId: number) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      dispatch(setAddToWhishList(productId));
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(setLoading(false));
    }
  }
};

const removeItemFromWishList = (productId: number) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      dispatch(removeItemFromWhishList(productId));
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(setLoading(false));
    }
  }
};

/**
 * Grouped collection of core actions creators, thunk async action creators and others.
 * Organized for import as default.
 */
export default {
  loadCategories,
  addItemToCart,
  addToWhishList,
  removeItemFromWishList
};