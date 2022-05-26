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

import { Header, Categories } from '../../components/home';
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
  },
  scrollView: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: Colors.whiteColor,
  },
});
