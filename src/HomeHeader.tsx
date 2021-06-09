import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import dimensions from '../constants';
import globals from '../globals';

export default function HomeHeader() {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userIconContainer}>
        <Image source={globals.images.ui.userIcon} style={styles.userIcon} />
      </TouchableOpacity>
      <View style={styles.filler}/>
      <TouchableOpacity style={styles.searchIconContainer}>
        <Image source={globals.images.ui.searchIcon} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    height: dimensions.WINDOW_WIDTH * 0.11,
  },
  userIconContainer: {
    justifyContent: 'flex-end',
    alignItems: "flex-end",
    flex: 1,
  },
  userIcon: {
    height: "100%",
    width: dimensions.WINDOW_WIDTH * 0.11 ,
  },
  searchIconContainer: {
    flex: 0.8,
    justifyContent: 'center',
  },
  searchIcon: {
    height: dimensions.WINDOW_WIDTH * 0.075,
    width: dimensions.WINDOW_WIDTH * 0.075,
  },
  filler:{
    flex: 5,
  }
});
