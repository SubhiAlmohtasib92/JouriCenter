import { RootState } from '../../state';
import productDetailsActions from '../../state/product-details/product-details.actions';

import { IDispatchProps, IStateProps } from './product-details.types';

export const mapDispatchToProps = (dispatch): IDispatchProps => ({
  doLoadProductDetailsByProductId: (productId: number) =>
    dispatch(productDetailsActions.getProductDetailsByProductId(productId)),
});

export const mapStateToProps = (state: RootState): IStateProps => {
  return {
    home: state.home,
    core: state.core,
    categoryDetails: state.categoryDetails,
    productDetails: state.productDetails,
  };
};
