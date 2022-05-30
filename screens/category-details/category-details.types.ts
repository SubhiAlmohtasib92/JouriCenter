import { ICoreState, IProductCategory } from '../../state/core/core.types';
import { IHomeState } from '../../state/home/home.types';
import { ICategoryDetailsState } from '../../state/product-details/product-details.types';

export interface IDispatchProps {
  doLoadProductsByCategoryId: (categoryId: number) => (dispatch: any) => Promise<IProductCategory[] | undefined>
}

export interface IStateProps {
  home: IHomeState;
  core: ICoreState;
  categoryDetails: ICategoryDetailsState;
  navigation?: any;
  route?: any;
}

export type CategoriesDetailsProps = IStateProps & IDispatchProps;