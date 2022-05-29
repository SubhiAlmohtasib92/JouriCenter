// import { View, Text } from 'react-native';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { useEffect } from 'react';

// import * as productsAction from '../actions/products';
// import { IRootState } from '../types/state';
// import { Header } from '../components/home';

// interface IProps extends IRootState {
//   route: any;
//   navigation: any;
// }

// const CategoryProducts = (props: IProps) => {
//   const { actions } = props;
//   useEffect(() => {
//     actions.getProductsByCategoryId(props.route.params.categoryId);
//   }, []);

//   console.log('this is subhi', props.productsList);
//   return (
//     <View>
//       <Header title={props.route.params.categoryName} />
//       <Text>dta</Text>
//     </View>
//   )
// };


// const ActionCreators = Object.assign(
//   {},
//   productsAction,
// );


// const mapStateToProps = state => {
//   return {
//     productsList: state.productsList.productList,
//     categoriesList: state.productsList.categoriesList
//   }
// };

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(ActionCreators, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CategoryProducts);