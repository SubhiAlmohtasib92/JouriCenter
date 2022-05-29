import { CoreActions, ECoreActionTypes } from './core.actions';
import { ICoreState } from './core.types';



const initialState: ICoreState = {
  categoriesList: [],
  cart: [],
  whishList: [],
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
      return {
        ...state, cart: action.payload
      };
    case ECoreActionTypes.SET_WHISH_LIST:
      return {
        ...state, whishList: action.payload
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