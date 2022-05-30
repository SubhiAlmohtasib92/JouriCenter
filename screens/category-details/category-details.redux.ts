import { RootState } from '../../state';
import productDetailsActions from '../../state/product-details/product-details.actions';

import { IDispatchProps, IStateProps } from './category-details.types';


export const mapDispatchToProps = (dispatch): IDispatchProps => ({
  doLoadProductsByCategoryId: (categoryId: number) => dispatch(productDetailsActions.getProductsByCategoryId(categoryId))
});

export const mapStateToProps = (state: RootState): IStateProps => {
  return {
    home: state.home,
    core: state.core,
    categoryDetails: state.categoryDetails
  }
};
