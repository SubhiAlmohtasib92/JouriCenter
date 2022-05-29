import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Colors } from '../../../theme';

export const SLIDER_WIDTH = Dimensions.get('window').width + 140;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: Colors.primaryColor,
    width: ITEM_WIDTH,
    height: 250,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: Colors.primaryColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    height: '100%',
    borderRadius: 10,
    resizeMode: 'stretch'
  },
});

export default CarouselCardItem;
