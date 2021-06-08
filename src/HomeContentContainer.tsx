import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Carousel from "./Carousel";
import CategoryCarouselItem from './CategoryCarouselItem';
import CategoryService from "./CategoryService"
import FavoriteCarouselItem from './FavoriteCarouselItem';
import FavoriteService from "./FavoriteService"
import RestoCarouselItem from './RestoCarouselItem';
import RestoService from "./RestoService"

const carousels = {
  resto: "RESTAURANTES",
  category: "CATEGORIAS",
  favorites: "TUS FAVORITOS"
}

export default function HomeContentContainer() {

  const [categories, setCategories] = useState([]);
  const [restos, setRestos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    CategoryService.getCategories().then(setCategories)
  }, [])

  useEffect(() => {
    RestoService.getRestos().then(setRestos)
  }, [])

  useEffect(() => {
    FavoriteService.getFavorites().then(setFavorites)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Carousel
          title={carousels.resto}
          content={restos}
          ItemComponent={RestoCarouselItem}
        />

      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          title={carousels.category}
          content={categories}
          ItemComponent={CategoryCarouselItem}
        />
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          title={carousels.favorites}
          content={favorites}
          ItemComponent={FavoriteCarouselItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContainer: {
    height: 200,
    margin: 10
  },
  topContainer: {
    height: 300,
    flexDirection: "row"
  },
  titleImageContainer: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 2,
    backgroundColor: 'yellow',
    justifyContent: 'center'
  },
  midContainer: {
    height: 100,
    width: "100%",
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  }
});