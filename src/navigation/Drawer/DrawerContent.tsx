// DrawerContent.tsx
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {ms} from '../../helper/responsive';
import {AppText} from '../../components/ui/AppText';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '../../theme/ThemeContext';
import {MenuList} from './MenuList';

const imgSize = ms(50);
const iconSize = ms(30);
export const DrawerContent: React.FC<any> = ({navigation}) => {
  const {isDarkMode, toggleTheme, themeColors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: themeColors.background}]}>
      <View style={[styles.topContainer, {backgroundColor: '#0FA4AF'}]}>
        <View style={styles.topLeft}>
          <Image
            source={require('../../assets/image/user.jpg')}
            style={styles.userImg}
          />
          <AppText>User 1</AppText>
        </View>
        <TouchableOpacity onPress={toggleTheme}>
          {isDarkMode ? (
            <Icon
              name="wb-sunny"
              size={iconSize}
              style={[{color: themeColors.text}]}
            />
          ) : (
            <IonicIcon name="moon" size={iconSize} style={[{color: '#fff'}]} />
          )}
        </TouchableOpacity>
      </View>
      <MenuList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {},
  topContainer: {
    backgroundColor: 'red',
    paddingHorizontal: ms(10),
    paddingVertical: ms(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLeft: {
    alignItems: 'center',
  },
  userImg: {
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
  },
});
