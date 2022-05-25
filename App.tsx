import * as React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './Screens/Home/home-screen';

import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';


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

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'regular': require('./assets/fonts/Lemonada-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>
  }

  return (
    <SafeAreaProvider style={{ margin: 2, backgroundColor: '#fff' }}>
      <StatusBar hidden={false} />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#56bea8',
            tabBarInactiveTintColor: '#808080',
            title: route.name === 'Home' ? 'الرئيسية' : 'test',
            tabBarLabelStyle: {
              fontFamily: 'regular'
            }
          })}
        >
          <Tab.Screen
            name="MyProfile"
            component={SettingsScreen}
            options={{
              tabBarBadge: 2,
              tabBarLabel: 'صفحتي',
              tabBarIcon: ({ focused }) => {
                return <Ionicons
                  name={'person-circle-outline'}
                  size={30}
                  color={focused ? '#56bea8' : '#808080'}
                />;
              }
            }} />
          <Tab.Screen
            name="WhishList"
            component={SettingsScreen}
            options={{
              tabBarBadge: 2,
              tabBarLabel: 'قائمة الامنيات',
              tabBarIcon: ({ focused }) => {
                return <Ionicons
                  name={focused ? 'heart' : 'heart-outline'}
                  size={30}
                  color={focused ? '#56bea8' : '#808080'}
                />;
              }
            }}
          />
          <Tab.Screen
            name="ShoppingCart"
            component={SettingsScreen}
            options={{
              tabBarBadge: 2,
              tabBarLabel: 'عربة التسوق',
              tabBarIcon: ({ focused }) => {
                return <Ionicons
                  name={focused ? 'cart' : 'cart-outline'}
                  size={30}
                  color={focused ? '#56bea8' : '#808080'}
                  style={{ elevation: 3 }}
                />;
              }
            }} />
          <Tab.Screen
            name="Categories"
            component={SettingsScreen}
            options={{
              tabBarLabel: 'الفئات',
              tabBarIcon: ({ focused }) => {
                return <Ionicons
                  name={'apps-sharp'}
                  size={30}
                  color={focused ? '#56bea8' : '#808080'}
                />;
              }
            }} />
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'الرئيسية',
              tabBarIcon: ({ focused }) => {
                return <Ionicons
                  name={'md-home'}
                  size={30}
                  color={focused ? '#56bea8' : '#808080'}
                />;
              }
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider >
  );
}