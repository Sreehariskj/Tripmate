import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppText} from '../../../../Tripmate/src/components/ui/AppText';
import {ms} from '../../../../Tripmate/src/helper/responsive';
import {useTheme} from '../../../../Tripmate/src/theme/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SPACING} from '../../../../Tripmate/src/constants/sizes';

interface Props {
  name: string;
  onPress: () => void;
  iconName: string;
}

const MenuCard = ({item}: {item: Props}) => {
  const {name, onPress, iconName} = item;
  const {themeColors} = useTheme();
  return (
    <TouchableHighlight
      underlayColor={themeColors.accent}
      onPress={onPress}
      style={[styles.container, {borderBottomColor: themeColors.accent}]}>
      <>
        <Icon name={iconName} size={ms(20)} color={themeColors.text} />
        <AppText style={[styles.text]}>{name}</AppText>
      </>
    </TouchableHighlight>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: ms(12),
    paddingHorizontal: ms(12),
    marginBottom: ms(1),
    borderBottomWidth: 1,
    // backgroundColor: 'yellow',
  },
  text: {
    fontSize: ms(16),
    fontWeight: '500',
    marginLeft: ms(SPACING.MD),
  },
});
