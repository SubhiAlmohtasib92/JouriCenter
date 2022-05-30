import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { mapDispatchToProps, mapStateToProps } from './category-details.redux';
import { CategoriesDetailsProps } from './category-details.types';
import { Header } from '../../components/home';
import { IProduct } from '../../state/core/core.types';
import { Colors } from '../../theme';

const CategoryDetails = (props: CategoriesDetailsProps) => {
  useEffect(() => {
    props.doLoadProductsByCategoryId(props.route.params.categoryId);
  }, []);

  const RenderProduct = (productItem: IProduct) => {
    return (
      <Pressable
        style={styles.imageContainer}
        onPress={() => {
          props.navigation.navigate('ProductDetails', {
            productId: productItem.productId,
            productName: productItem.productName,
          });
        }}
      >
        <Image
          source={{ uri: productItem.productImages[0].imageURL }}
          style={styles.categoryImage}
        />
        <Text style={styles.categoryName}>{productItem.productName}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header
          title={props.route.params.categoryName}
          rightIcon='search-outline'
          rightIconFunction={() => {
            console.log('right Icon pressed');
          }}
          leftIcon='arrow-back-outline'
          leftIconFunction={props.navigation.goBack}
        />
        <View style={styles.listContainer}>
          <View
            style={{
              marginTop: 10,
              marginBottom: 40,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <FlatList
              numColumns={2}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              data={props.categoryDetails.products}
              keyExtractor={(item, index) => 'product-' + item.productId}
              renderItem={(item) => RenderProduct(item.item)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.primaryColor,
    marginBottom: 50,
  },
  listContainer: {
    marginTop: 10,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.whiteColor,
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetails);
