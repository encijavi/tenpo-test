import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import globals from '../globals';

export default function AddDirectionButton() {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image source={globals.images.ui.mapIcon} />
        <Text style={styles.addDirection}>
          Agregar direccion de entrega
        </Text>
      </TouchableOpacity>
      <View style={styles.whiteBorder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: globals.colors.secondary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 34
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
  addDirection: {
    marginLeft: 10,
    fontSize: 17,
    fontFamily: "Gotham-Light",
    color: globals.colors.primary
  }
});
