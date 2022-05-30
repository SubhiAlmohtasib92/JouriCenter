import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Colors } from '../../../../theme';
import { LikeButton } from '../../../common';
import { IProduct } from '../../../../state/core/core.types';

interface IProps {
  itemData: IProduct;
  index: number;
  addToWishList: (productId: number) => (dispatch: any) => Promise<void>;
  removeFromWishList: (productId: number) => (dispatch: any) => Promise<void>;
}

const ImageGridItem = (props: IProps) => {


  const RenderPrice = () => {
    if (props.itemData.productOnSale) {
      return (
        <>
          <Text
            style={{
              textDecorationLine: 'line-through',
              fontSize: 10,
              color: 'red',
              marginHorizontal: 2,
              paddingLeft: 5,
              fontFamily: 'regular',
            }}
          >
            {props.itemData.productSalePrice}₪
          </Text>
          <Text
            style={{
              fontSize: 10,
              paddingLeft: 5,
              fontFamily: 'regular',
            }}
          >
            {props.itemData.productRegularPrice}₪
          </Text>
        </>
      );
    } else {
      return <Text>{props.itemData.productPrice}₪</Text>;
    }
  };

  const DetermineColor = (itemData: IProduct) => {
    if (props.itemData.productStockStatus === 'outofstock') {
      return 'red';
    } else if (props.itemData.productStockStatus === 'instock') {
      if (itemData.productStockQuantity <= itemData.productLowStockAmount) {
        return '#ff6f00';
      } else {
        return Colors.primaryColor
      }
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: props.itemData.productImages[0].imageURL }} style={styles.image} />
      <Text style={styles.title}>{props.itemData.productName}</Text>
      <View style={{
        position: 'absolute',
        top: 5,
        right: 5,
      }}>
        <LikeButton
          addToWishList={props.addToWishList}
          productId={props.itemData.productId}
          removeFromWishList={props.removeFromWishList}
        />
      </View>
      <View style={styles.subInfo}>
        {RenderPrice()}
        <Text
          style={[
            styles.status,
            {
              color: DetermineColor(props.itemData)
            },
          ]}
        >
          {props.itemData.productStockStatus === 'outofstock' ? 'مباع' : 'متاح بالمخزن'}
        </Text>
      </View>

      {
        props.itemData.productOnSale && (
          <Text style={styles.discount}>-{Math.round(100 - ((parseInt(props.itemData.productSalePrice) * 100) / (parseInt(props.itemData.productRegularPrice))))}%</Text>
        )
      }
    </TouchableOpacity >
  );
};

export default ImageGridItem;

const styles = StyleSheet.create({
  container: {
    margin: 2,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  image: {
    height: 150,
    width: Dimensions.get('screen').width / 2 - 20,
    borderColor: Colors.primaryColor,
    borderRadius: 20,
    borderWidth: 1,
  },
  title: {
    fontFamily: 'regular',
    fontSize: 10,
    color: Colors.blackColor,
  },
  subInfo: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: 'regular',
    fontSize: 10,
    color: Colors.greyColor,
    paddingLeft: 10,
  },
  status: {
    fontFamily: 'regular',
    fontSize: 10,
    color: Colors.primaryColor,
  },
  discount: {
    fontFamily: 'regular',
    fontSize: 12,
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
    left: 0,
    backgroundColor: Colors.primaryColor,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 5,
    color: Colors.lightGreyColor,
  },
});
