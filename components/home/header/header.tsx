import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../../theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={'search-outline'}
        size={35}
        color={Colors.lightGreyColor}
      />
      <Text
        style={{
          fontFamily: 'regular',
          color: Colors.lightGreyColor,
          fontSize: 24,
        }}
      >
        جوري سنتر
      </Text>
      <Ionicons
        name={'notifications-outline'}
        size={35}
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
    paddingBottom: 5,
    backgroundColor: Colors.primaryColor,
  },
});
