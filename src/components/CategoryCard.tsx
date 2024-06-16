import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppButton} from './ui/AppButton';
import {ms} from '../helper/responsive';
import {FONT_WEIGHT, SPACING} from '../constants/sizes';

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
  return (
    <AppButton
      title={name}
      variant={activeCategory === id ? 'normal' : 'transparent'}
      onPress={onPress}
      style={styles.container}
      textStyle={styles.text}
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
