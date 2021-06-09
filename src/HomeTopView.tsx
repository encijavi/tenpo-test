import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import globals from '../globals';
import AddDirectionButton from './AddDirectionButton';
import HomeTitle from './HomeTitle';

export default function HomeTopView() {

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.userIconContainer}>
          <Image source={globals.images.ui.userIcon} style={styles.userHead} />
        </View>
        <View style={styles.searchIconContainer}>
          <Image source={globals.images.ui.searchIcon} style={styles.searchIcon} />
        </View>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <HomeTitle />
        </View>



        <View style={styles.titleImageContainer}>
          <Image source={globals.images.ui.handImage} style={styles.titleMainImageContainer} />
          <View style={styles.titleImageLeftContainer}>
            <Image source={globals.images.ui.dotsIcon} style={styles.dotsIcon} />
          </View>


        </View>
      </View>

      <View style={styles.greenBorder}/>
      <AddDirectionButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globals.colors.grey,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop:10
  },
  userHead: {
    height: 50,
    width: 50,
  },
  greenBorder: {
    width: "100%",
    height: 20,
    backgroundColor: globals.colors.secondary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },  
  topContainer: {
    height: 200,
    flexDirection: "row"
  },
  titleImageContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  titleImageLeftContainer: {
    height: "100%",
    justifyContent: 'flex-end'
  },
  titleContainer: {
    flex: 2,
    //backgroundColor: 'yellow',
    justifyContent: 'center'
  },
  midContainer: {
    height: 80,
    width: "100%",
    backgroundColor: globals.colors.secondary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
  },
  whiteBorder: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 20,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  searchIconContainer:{
    flex:2,
    justifyContent: 'center',
    alignItems: "flex-end"

  },
  userIconContainer:{
    justifyContent: 'center',
    flex:2,
    marginLeft: 8,
  },
  searchIcon: {
    height: 24,
    width: 24,
    marginRight: 15
  },
  dotsIcon: {
    height: 6,
    width: 28,
    marginBottom: 15
  },
  titleMainImageContainer: {

    width: 112,
    height: 181,
  },
  addDirection: {
    marginLeft: 10,
    fontSize: 17,
    fontFamily: "Gotham-Light",
    color: globals.colors.primary
  }
});
