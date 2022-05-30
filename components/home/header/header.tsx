import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IProps {
  title: string;
  rightIcon: React.ComponentProps<typeof Ionicons>['name'];
  rightIconFunction: any;
  leftIcon: React.ComponentProps<typeof Ionicons>['name'];
  leftIconFunction: any;
}

const Header = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={props.rightIcon}
        size={30}
        color={Colors.lightGreyColor}
        onPress={() => props.rightIconFunction}
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
        name={props.leftIcon}
        size={30}
        color={Colors.lightGreyColor}
        onPress={props.leftIconFunction}
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
