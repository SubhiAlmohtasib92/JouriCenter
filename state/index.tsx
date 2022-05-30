import { legacy_createStore as createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { ICoreState } from './core/core.types';
import coreReducer from './core/core.reducer';

import { IHomeState } from './home/home.types';
import homeReducer from './home/home.reducer';
import { ICategoryDetailsState } from './product-details/product-details.types';
import categoryDetailsReducer from './product-details/product-details.reducer';

export interface RootState {
  core: ICoreState;
  home: IHomeState;
  categoryDetails: ICategoryDetailsState
}

const rootReducer = {
  core: coreReducer,
  home: homeReducer,
  categoryDetails: categoryDetailsReducer
};

export default createStore(combineReducers<RootState>(rootReducer), applyMiddleware(thunk))