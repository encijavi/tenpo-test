import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import dimensions from '../../../constants';
import Category from '../../model/Category';

interface Props {
  item: Category
}

const cardContainerWidth = dimensions.WINDOW_WIDTH * 0.44;
const cardContainerHeight = dimensions.WINDOW_HEIGHT * 0.1;

export default function CategoryCarouselItem(props: Props) {
  const category = props.item;

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={category.imageSource}
        resizeMode="stretch">
        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {category.name}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    width: cardContainerWidth,
    height: cardContainerHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    width: "98%",
    height: "98%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    color: "white",
    letterSpacing: 1.5,
    fontFamily: "Gotham-Bold"
  },
  background: {
    marginLeft: 10,
    width: "98%",
    height: "98%",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
