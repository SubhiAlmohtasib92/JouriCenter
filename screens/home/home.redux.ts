import { RootState } from '../../state';
import coreActions from '../../state/core/core.actions';
import homeActions from '../../state/home/home.actions';
import { IDispatchProps, IStateProps } from './home.types';

export const mapDispatchToProps = (dispatch): IDispatchProps => ({

  doLoadProducts: () => dispatch(homeActions.loadProducts()),
  doLoadCategories: () => dispatch(coreActions.loadCategories()),
  doAddItemToCart: (productId) => dispatch(coreActions.addItemToCart(productId)),
  doAddToWhishList: (productId) => dispatch(coreActions.addToWhishList(productId)),
  doRemoveItemFromWishList: (productId) => dispatch(coreActions.removeItemFromWishList(productId))
});

export const mapStateToProps = (state: RootState): IStateProps => {
  return {
    home: state.home,
    core: state.core
  }
};
