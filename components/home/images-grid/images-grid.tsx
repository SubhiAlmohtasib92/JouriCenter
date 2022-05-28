import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../theme';
import ImageGridItem from './image-grid-item/image-grid-item';
import Ionicons from '@expo/vector-icons/Ionicons';

export interface ImageGridItem {
  price: number;
  discount: number;
  imgUrl: string;
  title: string;
  status: 'متاح في المخزن' | 'مباع' | 'على وشك الانتهاء';
}

const data: ImageGridItem[] = [
  {
    title: 'فستان تركي',
    status: 'متاح في المخزن',
    price: 10,
    discount: 20,
    imgUrl:
      'https://image.shutterstock.com/image-photo/beauty-sexy-fashion-model-girl-260nw-599068877.jpg',
  },
  {
    status: 'على وشك الانتهاء',
    title: 'فستان تركي',
    price: 15,
    discount: 25,
    imgUrl:
      'https://previews.123rf.com/images/puhhha/puhhha1803/puhhha180300612/97290296-women-clothes-fashion-woman-in-fashionable-dress-beautiful-female-model-with-sexy-fit-body-in-stylis.jpg',
  },
  {
    status: 'مباع',
    title: 'فستان تركي',
    price: 60,
    discount: 10,
    imgUrl: 'https://picsum.photos/id/12/200/300',
  },
  {
    status: 'على وشك الانتهاء',
    title: 'فستان تركي',
    price: 44,
    discount: 0,
    imgUrl: 'https://picsum.photos/id/12/200/300',
  },
];

const ImagesGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          عرض الجميع{' '}
          <Ionicons
            name={'chevron-back-sharp'}
            size={20}
            color={Colors.greyColor}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Text>

        <Text style={styles.headerText}>وصلنا حديثا</Text>
      </View>
      <View style={styles.itemsContainer}>
        {data.map((item, index) => {
          return <ImageGridItem key={index} data={item} index={index} />;
        })}
      </View>
    </View>
  );
};

export default ImagesGrid;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteColor,
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  headerText: {
    fontFamily: 'regular',
    fontSize: 15,
    color: Colors.greyColor,
  },
  itemsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
