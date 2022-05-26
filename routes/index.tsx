import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

import { Colors } from '../theme';
import HomeScreen from '../screens/home';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    </SafeAreaView>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarInactiveTintColor: Colors.greyColor,
          tabBarLabelStyle: {
            fontFamily: 'regular',
          },
        })}
      >
        <Tab.Screen
          name='MyProfile'
          component={SettingsScreen}
          options={{
            tabBarBadge: 2,
            tabBarLabel: 'صفحتي',
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={'person-circle-outline'}
                  size={30}
                  color={focused ? Colors.primaryColor : Colors.greyColor}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name='WhishList'
          component={SettingsScreen}
          options={{
            tabBarBadge: 2,
            tabBarLabel: 'قائمة الامنيات',
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? 'heart' : 'heart-outline'}
                  size={30}
                  color={focused ? Colors.primaryColor : Colors.greyColor}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name='ShoppingCart'
          component={SettingsScreen}
          options={{
            tabBarBadge: 2,
            tabBarLabel: 'عربة التسوق',
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? 'cart' : 'cart-outline'}
                  size={30}
                  color={focused ? Colors.primaryColor : Colors.greyColor}
                  style={{ elevation: 3 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name='Categories'
          component={SettingsScreen}
          options={{
            tabBarLabel: 'الفئات',
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={'apps-sharp'}
                  size={30}
                  color={focused ? Colors.primaryColor : Colors.greyColor}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'الرئيسية',
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={'md-home'}
                  size={30}
                  color={focused ? Colors.primaryColor : Colors.greyColor}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
