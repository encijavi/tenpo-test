import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Carousel from "./Carousel";

const data = [{}, {}, {}, {}];

export default function App() {

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <Text>tenpo eats</Text>
        </View>
        <View style={styles.titleImageContainer}>
          <Text>manito</Text>
        </View>
      </View>
      <View style={styles.midContainer}>
        <Text>
          Agregar direccion de entrega
        </Text>
      </View>
      
      <View style={styles.carouselContainer}>
        <Carousel />
      </View>
      <View style={styles.carouselContainer}>
        <Carousel />
      </View>
      <View style={styles.carouselContainer}>
        <Carousel />
      </View>
      </ScrollView>
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
