import React from 'react';
import { View, FlatList, Image, Animated, Dimensions } from 'react-native';
import { Colors } from '../../../theme';

interface IProps {
  data: string[] | [];
}

const ProductDetailsCarouselCards = (props: IProps) => {
  const width = Dimensions.get('window').width;
  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  const renderProduct = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: 400,
        }}
      >
        <Image
          source={{ uri: item }}
          style={{
            width: '100%',
            height: '100%',

            resizeMode: 'stretch',
          }}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        height: 400,
        width: width,
      }}
    >
      <FlatList
        data={props.data}
        horizontal
        renderItem={renderProduct}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={width}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 10,
        }}
      >
        {props.data.map((data, index) => {
          let opacity = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.2, 1, 0.2],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={{
                width: '16%',
                height: 2.4,
                backgroundColor: Colors.primaryColor,
                opacity,
                marginHorizontal: 4,
                borderRadius: 100,
              }}
            ></Animated.View>
          );
        })}
      </View>
    </View>
  );
};

export default ProductDetailsCarouselCards;
