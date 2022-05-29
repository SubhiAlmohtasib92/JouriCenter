import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../../theme';

interface IProps {
  title: string;
}
const Header = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={'search-outline'}
        size={30}
        color={Colors.lightGreyColor}
      />
      <Text
        style={{
          fontFamily: 'regular',
          color: Colors.lightGreyColor,
          fontSize: 20,
        }}
      >
        {props.title}
      </Text>
      <Ionicons
        name={'notifications-outline'}
        size={30}
        color={Colors.lightGreyColor}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 3,
    backgroundColor: Colors.primaryColor,
  },
});
