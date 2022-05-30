import { ICoreState, IProduct } from '../../state/core/core.types';
import { IHomeState } from '../../state/home/home.types';
import { ICategoryDetailsState } from '../../state/category-details/category-details.types';
import { IProductDetailsState } from '../../state/product-details/product-details.types';

export interface IDispatchProps {
  doLoadProductDetailsByProductId: (
    productId: number
  ) => (dispatch: any) => Promise<IProduct[] | undefined>;
}

export interface IStateProps {
  home: IHomeState;
  core: ICoreState;
  categoryDetails: ICategoryDetailsState;
  productDetails: IProductDetailsState;
  navigation?: any;
  route?: any;
}

export type ProductDetailsProps = IStateProps & IDispatchProps;
