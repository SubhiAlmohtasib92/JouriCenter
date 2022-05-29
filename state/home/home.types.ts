import { IProduct } from '../core/core.types';

export interface IHomeState {
  carouselImages: string[];
  mostRecentProducts: IProduct[];
  featuredProducts: IProduct[];
  products: IProduct[];
  loading: boolean;
}