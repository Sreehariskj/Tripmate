import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import {ms} from '../../helper/responsive';
import {useTheme} from '../../theme/ThemeContext';

const imgSize = ms(38);
export const Header = () => {
  const navigation = useNavigation();
  const {isDarkMode, toggleTheme, themeColors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: themeColors.background}]}>
      {/* @ts-ignore */}
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" size={ms(40)} style={{color: themeColors.text}} />
      </TouchableOpacity>
      <View style={styles.left}>
        <Image
          source={require('../../assets/image/user.jpg')}
          style={styles.userImg}
        />
      </View>
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
    paddingHorizontal: ms(15),
    // backgroundColor:'yellow',
  },
  left: {},
  userImg: {
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
  },
});
