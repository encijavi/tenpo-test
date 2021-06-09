import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeTopView() {

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.userHeadContainer}>
            <View style={styles.userHead}/> 
          </View>          
          <Text style={styles.title}>Tenpo</Text>
          <Text style={styles.title}>Eats</Text>
          <Text style={styles.subtitle}>DELIVER APP</Text>
        </View>
        <View style={styles.titleImageContainer}>
        <View style={styles.searchIconContainer}>
            <View style={styles.searchIcon}/> 
          </View>   
          <View style={styles.titleMainImageContainer}>
            <View>

            </View>
          </View>     


        </View>
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.addDirection}>
          Agregar direccion de entrega
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userHeadContainer:{
    width: "100%"
  },
  userHead:{
    marginLeft: 10,
    backgroundColor: "grey",
    borderRadius: 2,
    height: 50,
    width: 50
  },
  title:{
    fontSize: 42  ,
    textAlign: 'left'
  },
  subtitle:{
    fontSize: 15,
    letterSpacing: 4,
    textAlign: 'left'
  },
  carouselContainer: {
    height: 200,
    margin: 10
  },
  topContainer: {
    height: 256,
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
    height: 80,
    width: "100%",
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchIconContainer:{
    position: "absolute",
    top: 40,
    right: 15,
    width: 24,
    height: 24,
    backgroundColor: "black",
  },
  searchIcon:{

  },  
  titleMainImageContainer:{
    position: "absolute",
    bottom: 0,
    left: 15,
    width: 112,
    height: 181,
    backgroundColor: "black",
  },
  addDirection:{
    fontSize: 17,
  }
});
