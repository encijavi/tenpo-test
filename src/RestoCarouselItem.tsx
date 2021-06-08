import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import globals from '../globals';
import Resto from './Resto';

const text = {
  discount: "DCTO"
}
interface Props {
  resto: Resto
}

export default function RestoCarouselItem(props: Props) {
  const { resto } = props;
  const rating = Math.floor(resto.rating)

  return (
    <View style={styles.container}>
      <View style={styles.logoImageContainer}>
        <Image 
          style={styles.logoImage} 
          source={{ uri: resto.logoImageUrl }}
        />
        <View style={styles.discountContainer}>
          <Text style={styles.discountPercentage}>
            {`${resto.discount}%`}</Text>
          <Text style={styles.discountText}>{text.discount}</Text>
        </View>
      </View>
      <Text style={styles.name}>
        {resto.name}
      </Text>
      <View style={styles.detailContainer}>
        <View style={styles.ratingContainer}>
          <Image 
            style={styles.star} 
            source={globals.images.star[rating]} 
          />
          <Text style={styles.rating}>
            {resto.rating}
          </Text>
        </View>
        <Text style={styles.timeAprox}>
          {`${resto.timeAproxMin}-${resto.timeAproxMax} min.`}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 100,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  logoImageContainer: {
    height: 100,
    width: 100,
  },
  logoImage: {
    height: 90,
    width: 90,
    borderRadius: 15,
    position: "absolute",
    top: 5,
    right: 5,
  },
  discountContainer: {
    backgroundColor: globals.colors.primary,
    width: 27,
    height: 27,
    position: "absolute",
    right: 0,
    top: 0,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Gotham-Light",
  },
  detailContainer: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginVertical: 2,
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
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontFamily: "Gotham-Light",
  },
  timeAprox: {
    fontSize: 11,
    fontFamily: "Gotham-Light",
    marginTop: 2
  },
  star: {
    height: 10,
    width: 10,
    margin: 1
  }
});
