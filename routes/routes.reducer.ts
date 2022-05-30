import { RootState } from '../state';
import { IDispatchProps, IStateProps } from './routes.types';


export const mapDispatchToProps = (dispatch): IDispatchProps => ({

});

export const mapStateToProps = (state: RootState): IStateProps => {
  return {
    home: state.home,
    core: state.core
  }
};
