// DrawerContent.tsx
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {ms} from '../../../../Tripmate/src/helper/responsive';
import {AppText} from '../../../../Tripmate/src/components/ui/AppText';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '../../../../Tripmate/src/theme/ThemeContext';
import {MenuList} from './MenuList';
import {FONT_WEIGHT} from '../../../../Tripmate/src/constants/sizes';
import {COLORS} from '../../../../Tripmate/src/constants/colors';

const imgSize = ms(50);
const iconSize = ms(30);
export const DrawerContent: React.FC<any> = ({navigation}) => {
  const {isDarkMode, toggleTheme, themeColors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: themeColors.background}]}>
      <View
        style={[
          styles.topContainer,
          {
            backgroundColor: themeColors.accent,
            borderBlockColor: isDarkMode ? themeColors.neutral : COLORS.CREAM,
          },
        ]}>
        <View style={styles.topLeft}>
          <Image
            source={require('../../assets/image/user.jpg')}
            style={styles.userImg}
          />
          <AppText style={styles.userText}>User 1</AppText>
        </View>
        <TouchableOpacity onPress={toggleTheme}>
          {isDarkMode ? (
            <Icon name="wb-sunny" size={iconSize} color={themeColors.text} />
          ) : (
            <IonicIcon
              name="moon"
              size={iconSize}
              color={themeColors.neutral}
            />
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
    paddingVertical: ms(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: ms(5),
    // borderBottomLeftRadius: ms(15),
    // borderBottomRightRadius: ms(15),
  },
  topLeft: {
    alignItems: 'center',
  },
  userImg: {
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
  },
  userText: {
    fontSize: ms(18),
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});
