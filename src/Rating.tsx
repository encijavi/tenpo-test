import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import globals from '../globals';
import Resto from './Resto';

const text = {
  discount: "DCTO"
}
interface Props {
  rating: number
}

export default function Rating(props: Props) {
  const rating = Math.floor(props.rating)

  return (
    <View style={styles.container}>
      <Image
        style={styles.star}
        source={globals.images.star[rating]}
      />
      <Text style={styles.rating}>
        {props.rating}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontFamily: "Gotham-Light",
  },
  star: {
    height: 10,
    width: 10,
    margin: 1
  }
});
