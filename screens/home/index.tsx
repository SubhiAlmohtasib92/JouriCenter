import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
  Dimensions,
} from 'react-native';

import { Header, Categories, ImagesGrid } from '../../components/home';
import CarouselCards from '../../components/home/carousel/CarouselCards';

import { Colors } from '../../theme';
import { HomeProps } from './home.types';

const HomeScreen = (props: HomeProps) => {
  return (
    <SafeAreaView style={styles.homeScreenWrapper}>
      <View>
        <Header
          title='جوري سنتر'
          rightIcon='search-outline'
          rightIconFunction={() => {
            console.log('right Icon pressed');
          }}
          leftIcon='notifications-outline'
          leftIconFunction={() => {
            console.log('left Icon pressed');
          }}
        />
        <ScrollView
          horizontal={false}
          alwaysBounceVertical={false}
          style={styles.scrollView}
        >
          <CarouselCards data={props.home.carouselImages} />
          <Categories
            navigation={props.navigation}
            categories={props.core.categoriesList}
          />
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

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenWrapper: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    marginBottom: 50,
    height: '100%',
  },
  scrollView: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: Colors.whiteColor,
  },
});
