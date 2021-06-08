import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Category from './Category';


interface Props {
  item: Category
}

export default function CategoryCarouselItem(props: Props) {
  const category = props.item;
  
  return (
    <ImageBackground style={styles.background} source={category.imageSource}>
      <View style={styles.container}>
        <Text style={styles.name}>
          {category.name}
        </Text>
      </View>
      <View style={styles.overlay}/>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "90%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgba(0,0,0,0.1)',
  },
  name: {
    fontSize: 15,
    color: "white",
    letterSpacing: 1.5,
    fontFamily: "Gotham-Bold"
  },
  background: {
    height: 65,
    width: 180,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
