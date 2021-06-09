import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Carousel from "./components/HomeContentComponents/Carousel";
import CategoryCarouselItem from './components/HomeContentComponents/CategoryCarouselItem';
import CategoryService from "./service/CategoryService"
import FavoriteCarouselItem from './components/HomeContentComponents/FavoriteCarouselItem';
import FavoriteService from "./service/FavoriteService"
import RestoCarouselItem from './components/HomeContentComponents/RestoCarouselItem';
import RestoService from "./service/RestoService"

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
    alignItems: 'center',
    justifyContent: 'center'
  },
  carouselContainer: {
    flex:1,
    marginBottom: 30
  }
});
