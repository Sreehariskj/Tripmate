import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';
import {ReactChildrenType} from '../../types/index.';

interface Props {
  children: ReactChildrenType;
  style?: StyleProp<TextStyle>;
  [x: string]: any;
}

export const AppText: React.FC<Props> = ({children, style,...rest}: Props) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16, // add as needed
  },
});
