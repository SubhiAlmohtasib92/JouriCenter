import { ICoreState, IProduct, IProductCategory } from '../../state/core/core.types';
import { IHomeState } from '../../state/home/home.types';

export interface IDispatchProps {
  doLoadProducts: () => (dispatch: any) => Promise<IProduct[] | undefined>;
  doLoadCategories: () => (dispatch: any) => Promise<IProductCategory[] | undefined>;
  doAddItemToCart: (productId: number) => (dispatch: any) => Promise<void>;
  doAddToWhishList: (productId: number) => (dispatch: any) => Promise<void>;
  doRemoveItemFromWishList: (productId: number) => (dispatch: any) => Promise<void>;
}

export interface IStateProps {
  home: IHomeState;
  core: ICoreState;
  navigation?: any;
  route?: any;
}

export type HomeProps = IStateProps & IDispatchProps;