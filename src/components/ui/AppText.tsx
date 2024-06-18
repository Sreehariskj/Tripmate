import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../theme/ThemeContext';
import {ObjectStringNumber, ReactChildrenType} from '../../types/index.';
import {ms} from '../../helper/responsive';
import {FONT_SIZE} from '../../constants/sizes';

interface Props {
  children: ReactChildrenType;
  style?: StyleProp<TextStyle>;
}

export const AppText: React.FC<Props> = ({children, style}: Props) => {
  const {themeColors} = useTheme();
  return (
    <Text style={[styles.text, {color: themeColors.text}, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: ms(FONT_SIZE.MD),
  },
});
