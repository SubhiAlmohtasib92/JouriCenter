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
} from "react-native";
import SliderItem from "./slider-item/slider-item";

const { width, height } = Dimensions.get("window");

const images = [
  "https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png",
  "https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg",
  "https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/20085_StyleIcons_Header.jpg",
];

const ImageSlider = () => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  return (
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
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: width - 20,
    marginTop: 5,
    marginHorizontal: 10,
  },
});
