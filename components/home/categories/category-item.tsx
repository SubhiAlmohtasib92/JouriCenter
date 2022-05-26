import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../../../theme';

const CategoryItem = (props: { imageURL: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: props.imageURL }}
          key={`image-${props.imageURL}`}
        />
      </View>
      <Text style={styles.categoryTitle}>صبايا</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 110,
    justifyContent: 'center',
    margin: 2,
    marginHorizontal: 2,
    alignItems: 'center',
  },
  imageContainer: {
    height: 105,
    width: 107,
    borderRadius: 50,
    elevation: 5,
  },
  image: {
    height: 100,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    width: 100,
    borderRadius: 50,
  },
  categoryTitle: {
    fontFamily: 'regular',
    color: Colors.greyColor,
  },
});
