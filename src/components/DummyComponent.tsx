import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AppText} from './ui/AppText';
import {useTheme} from '../theme/ThemeContext';

export const DummyComponent = () => {
  const {themeColors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: themeColors.background}]}>
      <AppText>{`This is Dummy Screen`}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
