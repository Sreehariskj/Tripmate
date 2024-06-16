import {Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

const BannerCard = ({item, style}: any) => {
  const {id, image, onPress} = item;
  return (
    <TouchableWithoutFeedback onPress={onPress} style={[styles.container]}>
      <Image source={image} style={style} />
    </TouchableWithoutFeedback>
  );
};

export default BannerCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
});
