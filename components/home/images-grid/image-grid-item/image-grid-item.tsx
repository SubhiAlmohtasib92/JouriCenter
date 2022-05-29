import { ImageGridItem as ImageGridItemInterface } from '../images-grid';
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

interface IProps {
  data: ImageGridItemInterface;
  index: number;
}

const ImageGridItem = (props: IProps) => {


  const RenderPrice = () => {
    if (props.data.discount > 0) {
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
            {props.data.price}₪
          </Text>
          <Text
            style={{
              fontSize: 10,
              paddingLeft: 5,
              fontFamily: 'regular',
            }}
          >
            {props.data.price - props.data.price * (props.data.discount / 100)}₪
          </Text>
        </>
      );
    } else {
      return <Text>{props.data.price}₪</Text>;
    }
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: props.data.imgUrl }} style={styles.image} />
      <Text style={styles.title}>{props.data.title}</Text>
      <View style={{
        position: 'absolute',
        top: 5,
        right: 5,
      }}><LikeButton /></View>
      <View style={styles.subInfo}>
        {RenderPrice()}
        <Text
          style={[
            styles.status,
            {
              color:
                props.data.status === 'مباع'
                  ? 'red'
                  : props.data.status === 'متاح في المخزن'
                    ? Colors.primaryColor
                    : '#ff6f00',
            },
          ]}
        >
          {props.data.status}
        </Text>
      </View>

      {props.data.discount > 0 && (
        <Text style={styles.discount}>-{props.data.discount}%</Text>
      )}
    </TouchableOpacity>
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
