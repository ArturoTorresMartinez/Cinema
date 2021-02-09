import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Login from '../screens/Login/Login';
import MainScreen from '../screens/MainScreen/MainScreen';
import MovieDetails from '../screens/MovieDetails/MovieDetails';
import colors from '../utils/colors';
import I18n from '../utils/i18n';

const Stack = createNativeStackNavigator();

export const HomeNavigator = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
      headerBackTitle: null,
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: colors.headerBackground,
      },
      headerTintColor: 'white',
    }}>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: I18n.t('login'),
      }}
    />
    <Stack.Screen
      name="Home"
      component={MainScreen}
      options={{
        headerShown: true,
        headerLeft: () => null,
      }}
    />
    <Stack.Screen
      name="Movie"
      component={MovieDetails}
      options={{
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);
