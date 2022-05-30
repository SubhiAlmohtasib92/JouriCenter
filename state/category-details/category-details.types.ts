import { IProduct } from '../core/core.types';

export interface ICategoryDetailsState {
  products: IProduct[];
  loading: boolean;
}