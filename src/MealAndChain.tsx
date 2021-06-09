import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import constants from '../constants';
import globals from '../globals';
import Favorite from './Favorite';
import Rating from './Rating';
import TimeAproximate from './TimeAproximate';

interface Props {
  mealName: string
  chainName: string
}

export default function MealAndChain(props: Props) {
  const { mealName, chainName } = props;

  return (
    <View>
      <Text style={styles.mealName}>
        {mealName}
      </Text>
      <Text style={styles.chainName}>
        {chainName}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mealName: {
    fontSize: 13,
    color: "black",
    fontFamily: "Gotham-Book"
  },
  chainName: {
    fontSize: 14,
    color: globals.colors.primary,
    fontFamily: "Gotham-Bold"
  }
});
