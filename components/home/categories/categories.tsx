import { Text, Animated, StyleSheet } from 'react-native';
import { IProductCategory } from '../../../state/core/core.types';
import { Colors } from '../../../theme';
import CategoryItem from './category-item';


interface IProps {
  categories: IProductCategory[];
  navigation: any;
}

const Categories = (props: IProps) => {
  const scrollX = new Animated.Value(0);
  return (
    <Animated.View style={styles.container}>
      <Text style={styles.headerText}>جميع الفئات</Text>
      <Animated.FlatList
        alwaysBounceHorizontal={false}
        data={props.categories}
        keyExtractor={(item, index) => 'category-' + item.categoryId}
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
        renderItem={(item) => <CategoryItem itemData={item.item} navigation={props.navigation} />}
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
    backgroundColor: Colors.whiteColor,
  },
  headerText: {
    marginRight: 10,
    fontFamily: 'regular',
    color: Colors.primaryColor,
    textAlign: 'right',
    fontSize: 15,
    padding: 15
  },
});
