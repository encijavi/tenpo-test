import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import globals from '../globals';
import Rating from './Rating';
import Resto from './Resto';

const text = {
  discount: "DCTO"
}
interface Props {
  min: number;
  max: number;
}

export default function TimeAproximate(props: Props) {
  const {max, min} = props;
  
  return (
    <Text style={styles.timeAprox}>
      {`${min}-${max} min.`}
    </Text>
  )
}

const styles = StyleSheet.create({
  timeAprox: {
    fontSize: 11,
    fontFamily: "Gotham-Book",
    marginTop: 2
  }
});
