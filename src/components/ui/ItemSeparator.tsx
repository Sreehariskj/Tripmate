import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

interface Props {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
}
export const ItemSeparator:React.FC<Props> = ({width = 0, height = 0, style = {}}) => {
  return <View style={[{width, height}, style]}></View>;
};

const styles = StyleSheet.create({});
