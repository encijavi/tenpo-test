import React from 'react';
import { StyleSheet, View } from 'react-native';
import globals from '../globals';
import AddDirectionButton from './components/HomeTopComponents/AddDirectionButton';
import HomeHeader from './components/HomeTopComponents/HomeHeader';
import HomeMainImage from './components/HomeTopComponents/HomeMainImage';
import HomeTitle from './components/HomeTopComponents/HomeTitle';

export default function HomeTopContainer() {

  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <HomeTitle />
        </View>
        <HomeMainImage />
      </View>
      <View style={styles.greenBorder} />
      <AddDirectionButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globals.colors.grey,
  },
  greenBorder: {
    width: "100%",
    height: 20,
    backgroundColor: globals.colors.secondary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  topContainer: {
    height: 200,
    flexDirection: "row"
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center'
  },
});
