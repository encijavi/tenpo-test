import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import dimensions from '../../../constants';
import globals from '../../../globals';

export default function HomeMainImage() {

  return (
    <View style={styles.container}>
      <Image source={globals.images.ui.handImage} style={styles.titleMainImageContainer} />
      <View style={styles.titleImageLeftContainer}>
        <Image source={globals.images.ui.dotsIcon} style={styles.dotsIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  titleImageLeftContainer: {
    height: "100%",
    justifyContent: 'flex-end'
  },
  dotsIcon: {
    height: dimensions.WINDOW_HEIGHT * 0.008,
    width: dimensions.WINDOW_WIDTH * 0.079,
    marginBottom: 15
  },
  titleMainImageContainer: {
    width: dimensions.WINDOW_WIDTH * 0.31,
    height: dimensions.WINDOW_HEIGHT * 0.23,
  },
});
