import React from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Colors } from '../../../theme';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';

interface IProps {
  data: string[];
}

const CarouselCards = (props: IProps) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        margin: 0
      }}
    >
      <Carousel
        layout='tinder'
        vertical={false}
        layoutCardOffset={9}
        ref={isCarousel}
        data={props.data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      >
        <Pagination
          dotsLength={props.data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: Colors.primaryColor,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.7}
          tappableDots={true}
        />
      </View>
    </View>
  );
};

export default CarouselCards;
