import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import globals from '../globals';
import Favorite from './Favorite';
import Rating from './Rating';
import TimeAproximate from './TimeAproximate';

interface Props {
  item: Favorite
}

export default function FavoriteCarouselItem(props: Props) {
  const favorite = props.item;

  return (

    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <ImageBackground style={styles.background} imageStyle={styles.backgroundImage} source={favorite.mealImageSource} resizeMode="contain">
          <Image
            style={styles.logoImage}
            source={favorite.logoImageSource}
            resizeMode="contain"
          />
          <Image
            resizeMode= "stretch"
            style={styles.rectangle2}
            source={globals.images.ui.rectangle2}
          />
        </ImageBackground>
        <View style={styles.detailContainer}>
          <View style={styles.leftDetailContainer}>
            <Text style={styles.mealName}>
              {favorite.mealName}
            </Text>
            <Text style={styles.chainName}>
              {favorite.chainName}
            </Text>
          </View>
          <View style={styles.rightDetailContainer}>
            <Rating rating={favorite.rating} />
            <TimeAproximate max={favorite.timeAproxMax} min={favorite.timeAproxMin} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: 280,
    height: 155,
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 15,
    width: 265,
    height: 155,
  },
  detailContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  rightDetailContainer: {
    alignItems: "flex-end",
    justifyContent: 'center'
  },
  leftDetailContainer: {
    marginLeft: 5,
    alignItems: "flex-start",
    justifyContent: 'center'
  },
  mealName: {
    fontSize: 13,
    color: "black",
    fontFamily: "Gotham-Book"
  },
  chainName: {
    fontSize: 14,
    color: globals.colors.primary,
    fontFamily: "Gotham-Bold"
  },
  background: {
    marginTop: -10,
    height: 110,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backgroundImage: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  logoImage: {
    height: 40,
    width: 40,
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 2,
  },
  rectangle2: {
    width: 160,
    marginTop: 20,
    marginHorizontal: 20
  }
});
