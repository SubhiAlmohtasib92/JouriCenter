import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Colors } from '../theme';
import { HomeScreen, CategoriesScreen } from '../screens';
import store from '../state';
import categoryDetails from '../screens/category-details/category-details';
import { mapDispatchToProps, mapStateToProps } from './routes.reducer';
import { connect } from 'react-redux';
import { RoutesProps } from './routes.types';

const Tab = createBottomTabNavigator();
const CategoriesStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

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

const CategoriesStackScreen = () => {
  return (
    <CategoriesStack.Navigator
      screenOptions={{
        headerShown: false,

      }}  >
      <CategoriesStack.Screen name="Categories" component={CategoriesScreen} />
      <CategoriesStack.Screen name="CategoryDetails" component={categoryDetails} />
    </CategoriesStack.Navigator>
  )
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="CategoryDetails" component={categoryDetails} />
    </HomeStack.Navigator>
  )
}


const Routes = (props: RoutesProps) => {
  console.log('from routes,', store.getState().core.wishList);
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
          name='WishList'
          component={SettingsScreen}
          options={{
            ...(store.getState().core.wishList.length > 0 && { tabBarBadge: store.getState().core.wishList.length }),
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
            ...(store.getState().core.cart.length > 0 && { tabBarBadge: store.getState().core.cart.length }),
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
          component={CategoriesStackScreen}
          options={{
            tabBarLabel: 'الفئات',
            headerShown: false,
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
          component={HomeStackScreen}
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

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
