import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface Props {
  content: any[]
  ItemComponent: React.ComponentType<any>
}

export default function Carousel(props:Props) {
  const {ItemComponent,content} = props;

  const renderHeader = () => {
    return (
      <View style={{ height: 50, width: "100%", justifyContent: "center", }}>
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
      <ItemComponent/>
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
        data={content}
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
