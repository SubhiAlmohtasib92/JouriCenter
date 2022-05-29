import { ICoreState, IProductCategory } from '../../state/core/core.types';
import { IHomeState } from '../../state/home/home.types';

export interface IDispatchProps {
  doLoadProducts: () => void;
  doLoadCategories: () => (dispatch: any) => Promise<IProductCategory[] | undefined>
}

export interface IStateProps {
  home: IHomeState;
  core: ICoreState;
  navigation?: any;
  route?: any;
}

export type HomeProps = IStateProps & IDispatchProps;