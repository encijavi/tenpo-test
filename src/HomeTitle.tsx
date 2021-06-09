import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import globals from '../globals';

export default function HomeTitle() {

  return (
    <View style={styles.container}>
      <Text style={styles.titleTenpo}>Tenpo</Text>
      <Text style={styles.titleEats}>Eats</Text>
      <Text style={styles.subtitle}>DELIVER APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },
  titleTenpo: {
    fontSize: 42,
    textAlign: 'left',
    fontFamily: "Roboto-Bold"
  },
  titleEats: {
    fontSize: 42,
    lineHeight: 42,
    textAlign: 'left',
    fontFamily: "Roboto-Bold",
    color: globals.colors.primary
  },
  subtitle: {
    fontSize: 12,
    letterSpacing: 3,
    textAlign: 'left',
    fontFamily: "Gotham-Bold",
  },
});
