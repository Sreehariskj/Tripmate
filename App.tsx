/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler'; // avoid app crash in production due to react navigation drawer
import React from 'react';
import {Provider} from 'react-redux';

import {RootNavigator} from './src/navigation';
import {ThemeProvider} from './src/theme/ThemeContext';
import {store} from './src/redux/store';

const App = (): JSX.Element => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
