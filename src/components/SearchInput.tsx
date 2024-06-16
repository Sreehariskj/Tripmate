import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {hp, ms} from '../helper/responsive';
import {useTheme} from '../theme/ThemeContext';
import {AppTextInput} from './ui/AppTextInput';
import {FONT_SIZE, SPACING} from '../constants/sizes';

type SearchInput = {
  placeholder: string;
  onChangeText: (text: string) => void;
  style: StyleProp<ViewStyle>;
  [rest: string]: any;
};
export const SearchInput = ({
  placeholder,
  onChangeText,
  style,
  ...rest
}: SearchInput): React.JSX.Element => {
  const {themeColors} = useTheme();
  return (
    <View style={[styles.container, {borderColor: themeColors.neutral}, style]}>
      <Icon
        name="search"
        size={ms(FONT_SIZE.XL)}
        color={themeColors.text}
        style={styles.icon}
      />
      <AppTextInput
        {...rest}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(43),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: ms(FONT_SIZE.XL),
    paddingVertical: ms(SPACING.SM),
    paddingHorizontal: ms(SPACING.SM),
    // marginHorizontal: ms(10),
    marginVertical: ms(SPACING.SM),
    borderWidth: 1,
    // backgroundColor: 'red',
  },
  icon: {
    marginRight: SPACING.SM,
  },
  input: {
    // flex: 1,
  },
});
