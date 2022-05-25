import React, { Component } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
  FlatList,
  SafeAreaView
} from "react-native";

import SliderItem from "./slider-item/slider-item";

const { width, height } = Dimensions.get("window");

const images = [
  "https://image.shutterstock.com/image-photo/beauty-sexy-fashion-model-girl-260nw-599068877.jpg",
  "https://previews.123rf.com/images/puhhha/puhhha1803/puhhha180300612/97290296-women-clothes-fashion-woman-in-fashionable-dress-beautiful-female-model-with-sexy-fit-body-in-stylis.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg",
  "https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/20085_StyleIcons_Header.jpg",
];

const ImageSlider = () => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  return (
    <SafeAreaView>
      <Animated.View style={styles.container}>
        <Animated.FlatList
          alwaysBounceHorizontal={false}
          data={images}
          keyExtractor={(item, index) => "key" + index}
          pagingEnabled
          horizontal
          scrollEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          decelerationRate="normal"
          snapToAlignment="center"
          contentContainerStyle={{
            borderRadius: 10,
          }}
          renderItem={(item) => {
            console.log("recived item", item.item);
            return <SliderItem imageURL={item.item} />;
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: width - 20,
    marginTop: 5,
    marginHorizontal: 10,
    shadowColor: 'green',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,

  },
});
