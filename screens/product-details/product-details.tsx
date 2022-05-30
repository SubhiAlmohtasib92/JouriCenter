import { useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { Header } from '../../components/home';
import ProductDetailsCarouselCards from '../../components/product-details/carousel/CarouselCards';
import { Colors } from '../../theme';
import { mapDispatchToProps, mapStateToProps } from './product-details.reducer';
import { ProductDetailsProps } from './product-details.types';

import LottieView from 'lottie-react-native';

const ProductDetails = (props: ProductDetailsProps) => {
  useEffect(() => {
    props.doLoadProductDetailsByProductId(props.route.params.productId);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header
          title={props.route.params.productName}
          rightIcon='search-outline'
          rightIconFunction={() => {
            console.log('right Icon pressed');
          }}
          leftIcon='arrow-back-outline'
          leftIconFunction={props.navigation.goBack}
        />
        {props.productDetails.loading ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <LottieView
              style={{
                height: 50,
                width: 50,
              }}
              source={require('../../assets/lottie/loading.json')}
            />
            <Text
              style={{
                color: Colors.primaryColor,
                fontSize: 15,
                fontFamily: 'regular',
              }}
            >
              جاري التحميل
            </Text>
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={styles.productContentContainer}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          >
            <View>
              <ProductDetailsCarouselCards
                data={props.productDetails.productDetails.productImages.map(
                  (image) => image.imageURL
                )}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: Colors.primaryColor,
                }}
              >
                {props.productDetails.productDetails.productOnSale}
              </Text>
              <Text
                style={{
                  fontFamily: 'regular',
                  color: Colors.blackColor,
                  fontSize: 20,
                  textAlign: 'left',
                }}
              >
                {props.productDetails.productDetails.productName}
              </Text>
            </View>
            <Text>{props.productDetails.productDetails.productPrice}</Text>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginBottom: 50,
  },
  productContentContainer: {
    marginTop: 10,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.whiteColor,
    marginBottom: 40,
  },
  imageContainer: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  categoryName: {
    fontFamily: 'regular',
    fontSize: 15,
    color: Colors.blackColor,
  },
  categoryImage: {
    height: 220,
    borderRadius: 20,
    width: Dimensions.get('screen').width / 2 - 20,
  },
});
