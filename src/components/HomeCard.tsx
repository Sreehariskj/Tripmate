import {
  Image,
  ImageBackground,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useCallback, useRef} from 'react';

import {BlurView} from '@react-native-community/blur';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

import {AppText} from './ui/AppText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ms} from '../helper/responsive';
import {COLORS} from '../constants/colors';
import {FONT_SIZE, FONT_WEIGHT, SPACING} from '../constants/sizes';
import {likeItem} from '../redux/Slice/homeCardSlice';

interface BannerCardProps {
  item: any;
  onSingleTap?: () => void;
  style: StyleProp<ImageStyle>;
}

const LikeIconSize = ms(20);
const LikeIconContainerSize = ms(LikeIconSize + 10);
export const HomeCard = ({item, onSingleTap, style}: BannerCardProps) => {
  const {id, image} = item;
  const isLiked = item.liked;
  const dispatch = useDispatch();
  const doubleTapRef = useRef(null);

  // animated icon component
  const IconComponent = Animated.createAnimatedComponent(Icon);

  const scale = useSharedValue(0);

  // double Tap functionality
  const doubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      scale.value = withDelay(100, withSpring(0));
    });
  }, []);

  // animation style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}],
    };
  });
  const handleSingleTap = (e: any) => {
    if (e.nativeEvent.state === State.ACTIVE) {
      onSingleTap();
    }
  };
  const handleDoubleTap = (e: any) => {
    if (e.nativeEvent.state === State.ACTIVE) {
      dispatch(likeItem(id)); // like item dispatch
      if (!isLiked) {
        doubleTap();
      }
    }
  };
  return (
    // <TouchableWithoutFeedback style={[styles.container]}>
    <GestureHandlerRootView style={style}>
      <TapGestureHandler
        onHandlerStateChange={handleSingleTap}
        waitFor={doubleTapRef}>
        <TapGestureHandler
          // maxDelayMs={250}
          numberOfTaps={2}
          onHandlerStateChange={handleDoubleTap}
          ref={doubleTapRef}>
          <Animated.View style={{flex: 1}}>
            <ImageBackground
              source={image}
              style={[styles.imageContainer, style]}
              // resizeMode="cover"
            >
              <View style={styles.top}>
                <View style={styles.circle}>
                  <Icon
                    name={isLiked ? 'heart' : 'heart-outline'}
                    size={LikeIconSize}
                    color="red"
                  />
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
              <IconComponent
                name="heart"
                color={COLORS.LIGHT}
                size={ms(100)}
                style={[styles.doubleTap, animatedStyle]}
              />
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </GestureHandlerRootView>
    // </TouchableWithoutFeedback>
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
    bottom: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingHorizontal: ms(SPACING.SM),
    paddingVertical: ms(SPACING.MD),
    width: '92%',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
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
  doubleTap: {
    position: 'absolute',
    top: '30%',
    left: '30%',
  },
  iconTextBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ms(5),
  },
  imageContainer: {
    flex: 1,
    overflow: 'hidden',
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
