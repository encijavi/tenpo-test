import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import constants from '../../../constants';
import globals from '../../../globals';
import Favorite from '../../Favorite';
import MealAndChain from './MealAndChain';
import Rating from './Rating';
import TimeAproximate from './TimeAproximate';
import CardMealAndChainImage from './CardMealAndChainImage';
import dimensions from '../../../constants';
interface Props {
  item: Favorite
}



export default function FavoriteCarouselItem(props: Props) {
  const favorite = props.item;

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.cardContainer}>
        <CardMealAndChainImage mealImageSource={favorite.mealImageSource} logoImageSource={favorite.logoImageSource} />
        <View style={styles.detailContainer}>
          <View style={styles.leftDetailContainer}>
            <MealAndChain mealName={favorite.mealName} chainName={favorite.chainName}/>
          </View>
          <View style={styles.rightDetailContainer}>
            <Rating rating={favorite.rating} />
            <TimeAproximate max={favorite.timeAproxMax} min={favorite.timeAproxMin} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: dimensions.favoriteItemContainerWidth,
    height: dimensions.favoriteItemContainerHeight,
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    width: "95%",
    height: "85%",
  },
  backgroundContainer: {
    flex:4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backgroundImage: {
    flex:1,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  detailContainer: {
    flex: 2,
    flexDirection: "row",
    marginHorizontal: 5
  },
  rightDetailContainer: {
    alignItems: "flex-end",
    justifyContent: 'center',
    flex: 2,
  },
  leftDetailContainer: {
    flex: 7,
    justifyContent: 'center'
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
