import { ICoreState } from '../../state/core/core.types';
import { IHomeState } from '../../state/home/home.types';

export interface IDispatchProps {
  //doLoadProducts: () => void;
}

export interface IStateProps {
  home: IHomeState;
  core: ICoreState;
  navigation?: any;
  route?: any;
}

export type CategoriesProps = IStateProps & IDispatchProps;