import {StyleSheet, View} from 'react-native';
import React from 'react';
import { AppText } from '../../components/ui/AppText';
import { AppTextInput } from '../../components/ui/AppTextInput';

const HomeScreen = () => {
  return (
      <View style={styles.container}>
        <AppTextInput style={styles.titleText} />
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  titleText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
});
