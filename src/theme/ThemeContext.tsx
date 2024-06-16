import React, {createContext, useState, useEffect, useContext} from 'react';
import {Appearance} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {LightColors, DarkColors} from './Palette';
import {
  ObjectString,
  ReactChildrenType,
  ReactComponentType,
  ReactFCType,
} from '../types/index.';

interface ThemeContextType {
  isDarkMode: boolean | null;
  toggleTheme: () => void;
  themeColors: ObjectString;
}
type Props = {
  children?: ReactChildrenType;
};

const initialValue: ThemeContextType = {
  isDarkMode: null,
  toggleTheme: () => {},
  themeColors: LightColors,
};

const ThemeContext = createContext<ThemeContextType | null>(initialValue);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<Props> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null); // Use null as initial state
  const [systemTheme, setSystemTheme] = useState<string | null | undefined>(
    Appearance.getColorScheme(),
  );

  // Load theme mode from AsyncStorage
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme !== null) {
          setIsDarkMode(savedTheme === 'dark');
        } else {
          setIsDarkMode(systemTheme === 'dark');
        }
      } catch (error) {
        console.error('Error loading theme:', error);
        setIsDarkMode(systemTheme === 'dark');
      }
    };

    loadTheme();
  }, [systemTheme]);

  // Toggle theme mode
  const toggleTheme = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    try {
      await AsyncStorage.setItem('theme', newMode ? 'dark' : 'light');
    } catch (error) {
      console.error('Error setting theme:', error);
    }
  };

  const theme: ThemeContextType = {
    isDarkMode: isDarkMode === null ? systemTheme === 'dark' : isDarkMode, // Use system theme if isDarkMode is null
    toggleTheme,
    themeColors: isDarkMode ? DarkColors : LightColors,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
