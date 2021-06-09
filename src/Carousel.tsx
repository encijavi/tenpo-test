import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import dimensions from '../constants';

interface Props {
  content: any[],
  title: string,
  ItemComponent: React.ComponentType<any>
}

export default function Carousel(props: Props) {
  const { ItemComponent, content, title } = props;


  const renderSeparator = (item) => {
    return (
      <View style={{ height: 1, width: 1}}>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemComponent item={item} />}
        data={content}
        horizontal
        ItemSeparatorComponent={renderSeparator}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  titleContainer: {
    height: dimensions.WINDOW_HEIGHT * 0.05,
    justifyContent: "center",
    marginHorizontal: 10
  },
  title: {
    fontSize: 18,
    fontFamily: "Gotham-Bold"
  }
});
