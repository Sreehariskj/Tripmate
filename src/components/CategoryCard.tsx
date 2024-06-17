import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppButton} from './ui/AppButton';
import {ms} from '../helper/responsive';
import {FONT_WEIGHT, SPACING} from '../constants/sizes';
import {useTheme} from '../theme/ThemeContext';

interface CategoryCardProps {
  item: {id: string; name: string};
  activeCategory: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  item,
  activeCategory,
  onPress,
}) => {
  const {id, name} = item;
  const {themeColors} = useTheme();
  return (
    <AppButton
      title={name}
      variant="normal"
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor:
            activeCategory === id ? themeColors.text : 'transparent',
        },
      ]}
      textStyle={[
        styles.text,
        {
          color:
            activeCategory === id ? themeColors.background : themeColors.text,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: ms(SPACING.SM),
  },
  text: {
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});
