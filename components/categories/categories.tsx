import {
  Text,
  View,
  Animated,
  Image
} from "react-native"

const images = [
  "https://image.shutterstock.com/image-photo/beauty-sexy-fashion-model-girl-260nw-599068877.jpg",
  "https://previews.123rf.com/images/puhhha/puhhha1803/puhhha180300612/97290296-women-clothes-fashion-woman-in-fashionable-dress-beautiful-female-model-with-sexy-fit-body-in-stylis.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg",
  "https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/20085_StyleIcons_Header.jpg",
  "https://image.shutterstock.com/image-photo/beauty-sexy-fashion-model-girl-260nw-599068877.jpg",
  "https://previews.123rf.com/images/puhhha/puhhha1803/puhhha180300612/97290296-women-clothes-fashion-woman-in-fashionable-dress-beautiful-female-model-with-sexy-fit-body-in-stylis.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg",
  "https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/20085_StyleIcons_Header.jpg",
  "https://image.shutterstock.com/image-photo/beauty-sexy-fashion-model-girl-260nw-599068877.jpg",
  "https://previews.123rf.com/images/puhhha/puhhha1803/puhhha180300612/97290296-women-clothes-fashion-woman-in-fashionable-dress-beautiful-female-model-with-sexy-fit-body-in-stylis.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg",
  "https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/20085_StyleIcons_Header.jpg",
  "https://image.shutterstock.com/image-photo/beauty-sexy-fashion-model-girl-260nw-599068877.jpg",
  "https://previews.123rf.com/images/puhhha/puhhha1803/puhhha180300612/97290296-women-clothes-fashion-woman-in-fashionable-dress-beautiful-female-model-with-sexy-fit-body-in-stylis.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg",
  "https://res.cloudinary.com/trunk-club/image/upload/f_auto,q_auto/Blog/20085_StyleIcons_Header.jpg",
];

const CategoryItem = (props: { imageURL: string }) => {
  console.log('test');
  return (
    <View style={{
      height: 150,
      width: 110,
      justifyContent: 'center',
      margin: 2,
      marginHorizontal: 2,
      alignItems: 'center',
    }}>
      <View style={{
        height: 105,
        width: 107,
        borderRadius: 50,
        elevation: 5
      }}>
        <Image style={{
          height: 100,
          borderWidth: 1,
          borderColor: '#56bea8',
          width: 100,
          borderRadius: 50,
        }} source={{ uri: props.imageURL }} key={`image-${props.imageURL}`} />
      </View>
      <Text style={{
        fontFamily: 'regular',
        color: '#808080'
      }} >صبايا</Text>
    </View>
  )
}

const Categories = () => {
  const scrollX = new Animated.Value(0);

  return (
    <Animated.View
      style={{
        backgroundColor: '#fafafa'
      }}>
      <Text style={{
        margin: 5,
        fontFamily: 'regular',
        color: '#808080',
        textAlign: 'center'

      }}>جميع الفئات</Text>
      <Animated.FlatList
        alwaysBounceHorizontal={false}
        data={images}
        keyExtractor={(item, index) => "key" + index}
        pagingEnabled
        horizontal
        scrollEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate='fast'
        snapToAlignment="center"
        contentContainerStyle={{
          borderRadius: 10,
        }}
        renderItem={(item) => {
          console.log("recived item", item.item);
          return <CategoryItem imageURL={item.item} />;
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />
    </Animated.View>
  )
};

export default Categories;