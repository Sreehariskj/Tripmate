import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {ReactChildrenType} from '../../types/index.';

const AppScroll: React.FC<{children: ReactChildrenType}> = ({children}) => {
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

export default AppScroll;

const styles = StyleSheet.create({});
