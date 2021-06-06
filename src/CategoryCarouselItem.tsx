import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function CategoryCarouselItem() {

    return (
      <View style={{height: 150, width: 100, backgroundColor: "orange", justifyContent: "flex-start", alignItems: "center"}}>
        <View style={{ height: 90, width: 90, backgroundColor: "red" }}/>
        <Text>
          mac donal
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
