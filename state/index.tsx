import { legacy_createStore as createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { ICoreState } from './core/core.types';
import coreReducer from './core/core.reducer';

import { IHomeState } from './home/home.types';
import homeReducer from './home/home.reducer';

export interface RootState {
  core: ICoreState;
  home: IHomeState;
}

const rootReducer = {
  core: coreReducer,
  home: homeReducer
};

export default createStore(combineReducers<RootState>(rootReducer), applyMiddleware(thunk))