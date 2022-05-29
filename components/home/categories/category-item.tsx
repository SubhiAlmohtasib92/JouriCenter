import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { IProductCategory } from '../../../state/core/core.types';
import { Colors } from '../../../theme';

interface IProps {
  itemData: IProductCategory;
  navigation: any;
}
const CategoryItem = (props: IProps) => {
  return (
    <Pressable style={styles.container} onPress={(() => {
      props.navigation.navigate('Categories', {
        categoryId: props.itemData.categoryId
      })
    })}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: props.itemData.categoryImage.src }}
          key={`image-${props.itemData.categoryImage.id}`}
        />
      </View>
      <Text style={styles.categoryTitle}>{props.itemData.categoryName}</Text>
    </Pressable >
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 80,
    justifyContent: 'center',
    margin: 2,
    marginHorizontal: 2,
    alignItems: 'center',
  },
  imageContainer: {
    height: 75,
    width: 75,
    borderRadius: 50,
    elevation: 5,
    shadowColor: Colors.greyColor,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2
  },
  image: {
    height: 75,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    width: 75,
    borderRadius: 50,
  },
  categoryTitle: {
    fontFamily: 'regular',
    color: Colors.blackColor,
    fontSize: 15
  },
});
