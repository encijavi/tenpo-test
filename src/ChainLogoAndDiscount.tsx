import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import dimensions from '../constants';
import globals from '../globals';

const text = {
  discount: "DCTO"
}
interface Props {
  logoImageSource: any
  discount: number | undefined
}

export default function ChainLogoAndDiscount(props: Props) {
  const { logoImageSource, discount } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        source={logoImageSource}
        resizeMode="contain"
      />
      {!!discount && (
        <View style={styles.discountContainer}>
          <Text style={styles.discountPercentage}>
            {`${discount}%`}</Text>
          <Text style={styles.discountText}>
            {text.discount}
          </Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: dimensions.restoItemContainerHeight * 0.6,
    width: dimensions.restoItemContainerWidth * 0.9,
  },
  logoImage: {
    height: "98%",
    width: "98%",
    borderRadius: 10,
    position: "absolute",
    top: 5,
    right: 5,
  },
  discountContainer: {
    backgroundColor: globals.colors.primary,
    width: "30%",
    height: "30%",
    position: "absolute",
    right: 0,
    top: 0,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountText: {
    fontSize: 6,
    lineHeight: 7,
    color: "white",
    textAlign: "center",
    fontFamily: "Gotham-Light",
  },
  discountPercentage: {
    fontSize: 9,
    lineHeight: 10,
    color: "white",
    textAlign: "center",
    fontFamily: "Gotham-Light",
  },
});
