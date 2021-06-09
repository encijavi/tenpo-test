import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import globals from '../globals';
import AddDirectionButton from './AddDirectionButton';
import HomeHeader from './HomeHeader';
import HomeMainImage from './HomeMainImage';
import HomeTitle from './HomeTitle';

export default function HomeTopView() {

  return (
    <View style={styles.container}>
      <HomeHeader/>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <HomeTitle />
        </View>

        <HomeMainImage/>
      </View>

      <View style={styles.greenBorder}/>
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
  titleImageContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  titleImageLeftContainer: {
    height: "100%",
    justifyContent: 'flex-end'
  },
  titleContainer: {
    flex: 2,
    //backgroundColor: 'yellow',
    justifyContent: 'center'
  },
  midContainer: {
    height: 80,
    width: "100%",
    backgroundColor: globals.colors.secondary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
  },
  whiteBorder: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 20,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  dotsIcon: {
    height: 6,
    width: 28,
    marginBottom: 15
  },
  titleMainImageContainer: {
    width: 112,
    height: 181,
  },
});
