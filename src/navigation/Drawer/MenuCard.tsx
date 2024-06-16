import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppText} from '../../components/ui/AppText';
import {ms} from '../../helper/responsive';
import {useTheme} from '../../theme/ThemeContext';

interface Props {
  name: string;
  onPress: () => void;
}

const MenuCard = ({item}: {item: Props}) => {
  const {name, onPress} = item;
  const {themeColors} = useTheme();
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.container, {borderBottomColor: themeColors.text}]}>
      <AppText style={[styles.text]}>{name}</AppText>
    </TouchableHighlight>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: ms(10),
    borderBottomWidth: 1,
    // backgroundColor: 'yellow',
  },
  text: {
    fontSize: ms(20),
    fontWeight: '600',
  },
});
