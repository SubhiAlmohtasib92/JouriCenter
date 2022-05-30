import { IProduct } from '../core/core.types';

export interface IProductDetailsState {
  productDetails: IProduct;
  loading: boolean;
}
