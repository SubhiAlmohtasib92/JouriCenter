import { useEffect, useLayoutEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { Header, Categories, ImagesGrid } from '../../components/home';
import CarouselCards from '../../components/home/carousel/CarouselCards';

import { Colors } from '../../theme';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './home.redux';
import { HomeProps } from './home.types';


const HomeScreen = (props: HomeProps) => {
  useEffect(() => {
    props.doLoadCategories();
    props.doLoadProducts();
  }, [])
  // console.log(props.core.loading);
  console.log('most recent items', props.home.mostRecentProducts);
  console.log('wish list items', props.core.wishList);
  return (
    <SafeAreaView style={styles.homeScreenWrapper}>
      <View>
        <Header title='جوري سنتر' />
        <ScrollView
          horizontal={false}
          alwaysBounceVertical={false}
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <CarouselCards data={props.home.carouselImages} />
          <Categories categories={props.core.categoriesList} navigation={props.navigation} />
          <ImagesGrid
            data={props.home.mostRecentProducts}
            addToWishList={props.doAddToWhishList}
            removeFromWishList={props.doRemoveItemFromWishList}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  homeScreenWrapper: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    marginBottom: 50,
    height: '100%',
  },
  scrollView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.whiteColor,
  },
});



export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);