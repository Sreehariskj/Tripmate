import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useTheme} from '../../theme/ThemeContext';

interface AppScreenProps {
  children: React.ReactNode;
}

export const AppScreen: React.FC<AppScreenProps> = ({
  children,
}): JSX.Element => {
  const {isDarkMode, themeColors} = useTheme();
  const backgroundStyle = {
    backgroundColor: themeColors.background,
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? 25 : 0   // resolve notch overlap in android
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
