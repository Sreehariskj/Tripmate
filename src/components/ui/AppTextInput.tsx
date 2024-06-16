import {StyleProp, StyleSheet, TextInput, TextStyle} from 'react-native';
import React from 'react';
import {useTheme} from '../../theme/ThemeContext';
import {ObjectStringNumber, ReactChildrenType} from '../../types/index.';
import {ms} from '../../helper/responsive';

interface TextInputProps {
  style: StyleProp<TextStyle>;
  [x: string]: any;
}

export const AppTextInput = ({style, ...rest}: TextInputProps) => {
  const {themeColors} = useTheme();
  return (
    <TextInput
      {...rest}
      style={[styles.input, {color: themeColors.text}, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: ms(16),
    paddingLeft: ms(2),
    // backgroundColor: 'yellow',
  },
});
