import { CoreActions, ECoreActionTypes } from './core.actions';
import { ICoreState } from './core.types';



const initialState: ICoreState = {
  categoriesList: [],
  cart: [],
  wishList: [],
  loading: true
};

const reducer = (state: ICoreState = initialState, action: CoreActions): ICoreState => {
  switch (action.type) {
    case ECoreActionTypes.SET_CATEGORIES:
      return {
        ...state,
        categoriesList: action.payload
      };
    case ECoreActionTypes.SET_CART_ITEMS:
      const currentCartItems = state.cart;
      currentCartItems.push(action.payload);
      return {
        ...state, cart: currentCartItems
      };
    case ECoreActionTypes.SET_WHISH_LIST:
      const currentWishListItems = state.wishList;
      currentWishListItems.push(action.payload);
      return {
        ...state, wishList: currentWishListItems
      };
    case ECoreActionTypes.REMOVE_FROM_WISH_LIST:
      return {
        ...state, wishList: state.wishList.filter(productId => productId !== action.payload)
      };
    case ECoreActionTypes.SET_LOADING:
      return {
        ...state, loading: action.payload
      };
    case ECoreActionTypes.SET_LOADING:
      return {
        ...state, loading: action.payload
      };
  }
  return state;
};

export default reducer;