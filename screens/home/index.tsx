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

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeScreenWrapper}>
      <View>
        <Header />
        <ScrollView
          horizontal={false}
          alwaysBounceVertical={false}
          style={styles.scrollView}
        >
          <CarouselCards />
          <Categories />
          <ImagesGrid />
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
