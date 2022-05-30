import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
  , FlatList,
  Image,
  Dimensions,
  Pressable
} from 'react-native';
import { Header } from '../../components/home';

import { connect } from 'react-redux';

import { Colors } from '../../theme';
import { mapDispatchToProps, mapStateToProps } from './categories.redux';
import { IProductCategory } from '../../state/core/core.types';
import { CategoriesProps } from './categories.types';

const CategoriesScreen = (props: CategoriesProps) => {

  const RenderCategory = (categoryItem: IProductCategory) => {
    return (
      <Pressable style={styles.imageContainer} onPress={(() => {
        //('pressed');
        props.navigation.navigate('CategoryDetails', {
          categoryId: categoryItem.categoryId,
          categoryName: categoryItem.categoryName
        });
      })} >
        <Image source={{ uri: categoryItem.categoryImage.src }} style={styles.categoryImage} />
        <Text style={styles.categoryName} >{categoryItem.categoryName}</Text>
      </Pressable >
    );
  };
  console.log('categories screen props', props);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title='الفئات' />
        <View style={styles.listContainer}>
          <View style={{
            marginTop: 10,
            marginBottom: 40,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
            <FlatList
              numColumns={2}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              data={props.core.categoriesList}
              keyExtractor={(item, index) => 'category-' + item.categoryId}
              renderItem={(item) => RenderCategory(item.item)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.primaryColor,
    marginBottom: 50,
  },
  listContainer: {
    marginTop: 10,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.whiteColor,
  },
  imageContainer: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  categoryName: {
    fontFamily: 'regular',
    fontSize: 15,
    color: Colors.blackColor
  },
  categoryImage: {
    height: 220,
    borderRadius: 20,
    width: Dimensions.get('screen').width / 2 - 20,
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen);