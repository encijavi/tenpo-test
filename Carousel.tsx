import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = [{}, {}, {}, {}];

export default function Carousel() {


  const renderHeader = () => {
    return (
      <View style={{ height: 50, width: "100%", justifyContent: "center" }}>
        <Text>carlos</Text>
      </View>
    )
  }

  const renderSeparator = (item) => {
    return (
      <View style={{ height: 1, width: 1, borderRadius: 1 }}>
      </View>
    )
  }

  const renderItem = (item) => {
    return (
      <View style={{height: 150, width: 100, backgroundColor: "orange", justifyContent: "flex-start", alignItems: "center"}}>
        <View style={{ height: 90, width: 90, backgroundColor: "red" }}/>
        <Text>
          mac donal
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        keyExtractor={(item) => {
          const key = Math.random().toString()
          return key
        }}
        renderItem={renderItem}
        data={data}
        horizontal
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
