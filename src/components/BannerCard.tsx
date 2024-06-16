import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

interface BannerCardProps {
  item: any;
  style: StyleProp<ImageStyle>;
}

export const BannerCard = ({item, style}: BannerCardProps) => {
  const {id, image, onPress} = item;
  return (
    <TouchableWithoutFeedback onPress={onPress} style={[styles.container]}>
      <Image source={image} style={style} resizeMode="cover" />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
});
