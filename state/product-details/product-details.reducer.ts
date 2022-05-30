import {
  EProductDetailsActionTypes,
  ProductDetailsActions,
} from './product-details.actions';
import { IProductDetailsState } from './product-details.types';

const initialState: IProductDetailsState = {
  productDetails: undefined,
  loading: true,
};

const categoryDetailsReducer = (
  state: IProductDetailsState = initialState,
  action: ProductDetailsActions
): IProductDetailsState => {
  switch (action.type) {
    case EProductDetailsActionTypes.SET_LOAD_PRODUCT_BY_PRODUCT_ID:
      return {
        ...state,
        productDetails: action.payload,
      };
    case EProductDetailsActionTypes.SET_LOAD_PRODUCT_BY_PRODUCT_ID_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default categoryDetailsReducer;
