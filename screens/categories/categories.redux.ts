
import { bindActionCreators } from 'redux';
import { RootState } from '../../state';
import coreActions from '../../state/core/core.actions';
import homeActions from '../../state/home/home.actions';
import { IStateProps } from './categories.types';


export const mapDispatchToProps = (dispatch) => ({
  // actions: bindActionCreators(homeActions, dispatch),
  // core: bindActionCreators(coreActions, dispatch)
});

export const mapStateToProps = (state: RootState): IStateProps => {
  return {
    home: state.home,
    core: state.core
  }
};
