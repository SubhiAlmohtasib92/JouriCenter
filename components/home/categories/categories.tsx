import { Text, Animated, StyleSheet } from 'react-native';
import { Colors } from '../../../theme';
import CategoryItem from './category-item';

const images = [
  'https://image.shutterstock.com/image-photo/beauty-sexy-fashion-model-girl-260nw-599068877.jpg',
  'https://previews.123rf.com/images/puhhha/puhhha1803/puhhha180300612/97290296-women-clothes-fashion-woman-in-fashionable-dress-beautiful-female-model-with-sexy-fit-body-in-stylis.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
  'https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/20085_StyleIcons_Header.jpg',
  'https://image.shutterstock.com/image-photo/beauty-sexy-fashion-model-girl-260nw-599068877.jpg',
  'https://previews.123rf.com/images/puhhha/puhhha1803/puhhha180300612/97290296-women-clothes-fashion-woman-in-fashionable-dress-beautiful-female-model-with-sexy-fit-body-in-stylis.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
  'https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/20085_StyleIcons_Header.jpg',
  'https://image.shutterstock.com/image-photo/beauty-sexy-fashion-model-girl-260nw-599068877.jpg',
  'https://previews.123rf.com/images/puhhha/puhhha1803/puhhha180300612/97290296-women-clothes-fashion-woman-in-fashionable-dress-beautiful-female-model-with-sexy-fit-body-in-stylis.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
  'https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/20085_StyleIcons_Header.jpg',
  'https://image.shutterstock.com/image-photo/beauty-sexy-fashion-model-girl-260nw-599068877.jpg',
  'https://previews.123rf.com/images/puhhha/puhhha1803/puhhha180300612/97290296-women-clothes-fashion-woman-in-fashionable-dress-beautiful-female-model-with-sexy-fit-body-in-stylis.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
  'https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/20085_StyleIcons_Header.jpg',
];

const Categories = () => {
  const scrollX = new Animated.Value(0);
  return (
    <Animated.View style={styles.container}>
      <Text style={styles.headerText}>جميع الفئات</Text>
      <Animated.FlatList
        alwaysBounceHorizontal={false}
        data={images}
        keyExtractor={(item, index) => 'key' + index}
        pagingEnabled
        horizontal
        scrollEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate='fast'
        snapToAlignment='center'
        contentContainerStyle={{
          borderRadius: 10,
        }}
        inverted
        renderItem={(item) => <CategoryItem imageURL={item.item} />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />
    </Animated.View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGreyColor,
  },
  headerText: {
    marginRight: 10,
    fontFamily: 'regular',
    color: Colors.greyColor,
    textAlign: 'right',
    fontSize: 15,
  },
});
