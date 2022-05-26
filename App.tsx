import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useFonts } from 'expo-font';
import Routes from './routes';
import { Colors } from './theme';

import { StatusBar } from 'expo-status-bar';
import CarouselCards from './components/home/carousel/CarouselCards';

export default function App() {
  let [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Lemonada-Regular.ttf'),
    bold: require('./assets/fonts/Lemonada-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <View style={styles.StatusBar}>
        <StatusBar translucent style='auto' />
      </View>
      <Routes />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  StatusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: Colors.primaryColor,
  },
});
