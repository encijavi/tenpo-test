import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import Carousel from "./src/Carousel";
import HomeContentContainer from './src/HomeContentContainer';
import HomeTopView from './src/HomeTopView';
import globals from './globals';


const data = [{}, {}, {}, {}];

export default function App() {

  let [fontsLoaded] = useFonts({
    'Gotham-Bold': globals.fonts.gothamBold,
    'Gotham-Light': globals.fonts.gothamLight,
    'Gotham-Book': globals.fonts.gothamBook,
    'Roboto-Regular': globals.fonts.robotoRegular,
    'Roboto-Thin': globals.fonts.robotoThin,
    'Roboto-Light': globals.fonts.robotoLight,
    'Roboto-Bold': globals.fonts.robotoBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          <HomeTopView />
          <HomeContentContainer />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
