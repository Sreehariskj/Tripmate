import {
  Image,
  ImageBackground,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {AppText} from './ui/AppText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ms} from '../helper/responsive';
import {COLORS} from '../constants/colors';
import {FONT_SIZE, FONT_WEIGHT, SPACING} from '../constants/sizes';
import {BlurView} from '@react-native-community/blur';

interface BannerCardProps {
  item: any;
  style: StyleProp<ImageStyle>;
}

const LikeIconSize = ms(20);
const LikeIconContainerSize = ms(LikeIconSize + 10);
export const HomeCard = ({item, style}: BannerCardProps) => {
  const {id, image, isLiked, onPress} = item;
  return (
    <TouchableWithoutFeedback onPress={onPress} style={[styles.container]}>
      <ImageBackground
        source={image}
        style={[styles.imageContainer, style]}
        // resizeMode="cover"
      >
        <View style={styles.top}>
          <View style={styles.circle}>
            <Icon name="heart" size={LikeIconSize} color="red" />
          </View>
        </View>
        <View style={styles.bottom}>
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          />
          <View style={styles.bottomLeft}>
            <AppText style={[styles.bottomText, styles.name]}>
              {item.name}
            </AppText>
            <View style={[styles.iconTextBox]}>
              <Icon
                name="map-marker-outline"
                size={ms(18)}
                color={COLORS.LIGHT}
                style={[styles.locationIcon]}
              />
              <AppText style={[styles.bottomText, styles.locationText]}>
                {item.location}
              </AppText>
            </View>
          </View>
          <View style={[styles.bottomRight]}>
            <AppText style={[styles.bottomText, styles.name]}>
              {`${item.rate.currency}${item.rate.value}`}
            </AppText>
            <View style={[styles.iconTextBox]}>
              <Icon
                name="star"
                size={ms(18)}
                color={'gold'}
                style={[styles.locationIcon]}
              />
              <AppText style={[styles.bottomText, styles.ratingText]}>
                {item.rating}
              </AppText>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bottom: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderRadius: ms(12),
    bottom: ms(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingHorizontal: ms(SPACING.SM),
    paddingVertical: ms(SPACING.MD),
    width: '92%',
  },
  bottomText: {
    color: COLORS.LIGHT,
    fontSize: ms(FONT_SIZE.MD),
    fontWeight: FONT_WEIGHT.MEDIUM,
    // backgroundColor: 'gray',
  },
  bottomLeft: {
    flex: 0.9,
  },
  bottomRight: {
    width: ms(50),
    alignItems: 'flex-end',
    // backgroundColor: 'red',
  },
  circle: {
    height: LikeIconContainerSize,
    width: LikeIconContainerSize,
    borderRadius: LikeIconContainerSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.CREAM,
    alignSelf: 'flex-end',
    marginRight: ms(10),
  },
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  iconTextBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ms(5),
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  locationIcon: {},
  name: {},
  ratingText: {},
  locationText: {
    fontWeight: FONT_WEIGHT.LIGHT,
  },
  top: {
    // backgroundColor: 'yellow',
    top: ms(25),
  },
});
