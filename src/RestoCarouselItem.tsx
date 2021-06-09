import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import dimensions from '../constants';
import ChainLogoAndDiscount from './ChainLogoAndDiscount';
import Rating from './Rating';
import Resto from './Resto';
import TimeAproximate from './TimeAproximate';

interface Props {
  item: Resto
}

export default function RestoCarouselItem(props: Props) {
  const resto = props.item;

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <ChainLogoAndDiscount
        logoImageSource={resto.logoImageSource}
        discount={resto.discount}
      />
      <View style={styles.chainNameContainer}>
        <Text style={styles.chainName}>
          {resto.name}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Rating rating={resto.rating} />
        <TimeAproximate max={resto.timeAproxMax} min={resto.timeAproxMin} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: dimensions.restoItemContainerWidth,
    height: dimensions.restoItemContainerHeight,
    alignItems: "center",
  },
  chainNameContainer: {
    marginTop: 7
  },
  chainName: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Gotham-Book",
  },
  detailContainer: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginVertical: 2,
  },
});
