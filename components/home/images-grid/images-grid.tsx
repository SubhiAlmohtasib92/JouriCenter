import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../theme';
import ImageGridItem from './image-grid-item/image-grid-item';
import Ionicons from '@expo/vector-icons/Ionicons';
import { IProduct } from '../../../state/core/core.types';

interface IProps {
  data: IProduct[];
  addToWishList: (productId: number) => (dispatch: any) => Promise<void>;
  removeFromWishList: (productId: number) => (dispatch: any) => Promise<void>;
}

const ImagesGrid = (props: IProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          عرض الجميع{' '}
          <Ionicons
            name={'chevron-back-sharp'}
            size={20}
            color={Colors.blackColor}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Text>

        <Text style={styles.headerText}>وصلنا حديثا</Text>
      </View>
      <View style={styles.itemsContainer}>
        {props.data.map((item, index) => {
          return <ImageGridItem
            key={index}
            itemData={item}
            index={index}
            addToWishList={props.addToWishList}
            removeFromWishList={props.removeFromWishList}
          />;
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
    color: Colors.primaryColor,
    padding: 15
  },
  itemsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
