import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface Props {
  content: any[],
  title: string,
  ItemComponent: React.ComponentType<any>
}

export default function Carousel(props: Props) {
  const { ItemComponent, content, title } = props;

  const renderHeader = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }

  const renderSeparator = (item) => {
    return (
      <View style={{ height: 1, width: 1, borderRadius: 1 }}>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemComponent item={item} />}
        data={content}
        horizontal
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
    //add dimension
  },
  titleContainer: {
    height: 50,
    width: "100%",
    justifyContent: "center"
  },
  title: {
    fontSize: 18,
    fontFamily: "Gotham-Bold"
  }
});
