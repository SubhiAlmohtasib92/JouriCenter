import { ECategoryDetailsActionTypes, CategoryDetailsActions } from './category-details.actions';
import { ICategoryDetailsState } from './category-details.types';

const initialState: ICategoryDetailsState = {
  products: [],
  loading: true
};

const categoryDetailsReducer = (state: ICategoryDetailsState = initialState, action: CategoryDetailsActions): ICategoryDetailsState => {
  switch (action.type) {
    case ECategoryDetailsActionTypes.SET_LOAD_PRODUCTS_BY_CATEGORY_ID:
      return {
        ...state,
        products: action.payload
      };
    case ECategoryDetailsActionTypes.SET_LOAD_PRODUCTS_BY_CATEGORY_ID_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}

export default categoryDetailsReducer;