import { legacy_createStore as createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { ICoreState } from './core/core.types';
import coreReducer from './core/core.reducer';

import { IHomeState } from './home/home.types';
import homeReducer from './home/home.reducer';
import { ICategoryDetailsState } from './category-details/category-details.types';
import categoryDetailsReducer from './category-details/category-details.reducer';

import { IProductDetailsState } from './product-details/product-details.types';
import productDetailsReducer from './product-details/product-details.reducer';

export interface RootState {
  core: ICoreState;
  home: IHomeState;
  categoryDetails: ICategoryDetailsState;
  productDetails: IProductDetailsState;
}

const rootReducer = {
  core: coreReducer,
  home: homeReducer,
  categoryDetails: categoryDetailsReducer,
  productDetails: productDetailsReducer,
};

export default createStore(
  combineReducers<RootState>(rootReducer),
  applyMiddleware(thunk)
);
