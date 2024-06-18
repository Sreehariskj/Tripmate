import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import {useTheme} from '../../theme/ThemeContext';
import {AppButton} from './AppButton';
import {ms} from '../../helper/responsive';
import {SPACING} from '../../constants/sizes';

const imgSize = ms(28);
export const Header = () => {
  const navigation = useNavigation();
  const {themeColors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: themeColors.background}]}>
      {/* @ts-ignore */}
      <AppButton
        variant="transparent"
        onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" size={ms(28)} color={themeColors.text} />
      </AppButton>
      <AppButton variant="transparent" style={styles.left}>
        <Image
          source={require('../../assets/image/user.jpg')}
          style={styles.userImg}
        />
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingHorizontal: ms(SPACING.MD),
    // backgroundColor:'yellow',
  },
  left: {},
  userImg: {
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
  },
});
