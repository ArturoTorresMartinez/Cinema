/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/app.navigator';
import {enableScreens} from 'react-native-screens';
import colors from './src/utils/colors';

enableScreens();
const App: () => React$Node = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor={colors.headerBackground}
        />
        <AppNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
