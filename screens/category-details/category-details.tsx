import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { mapDispatchToProps, mapStateToProps } from './category-details.redux';
import { CategoriesDetailsProps } from './category-details.types';
import { Header } from '../../components/home';

const CategoryDetails = (props: CategoriesDetailsProps) => {
  useEffect(() => {
    props.doLoadProductsByCategoryId(props.route.params.categoryId)
  }, []);
  // console.log('my item pr', props.categoryDetails.products);
  // console.log('my item pr', props.categoryDetails.loading);
  // console.log('all props', props.route);
  return (
    <View>
      <Header title={props.route.params.categoryName} />
      <Text>dta</Text>
    </View>
  )
};



export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetails);