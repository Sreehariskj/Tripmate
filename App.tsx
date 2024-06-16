/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler'; // avoid app crash in production due to react navigation drawer
import React from 'react';

import {RootNavigator} from './src/navigation';
import {ThemeProvider} from './src/theme/ThemeContext';

const App = (): JSX.Element => {
  return (
    <>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </>
  );
};

export default App;
