import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {HomeNavigator} from './home.navigator';

class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name={'Login'}
          component={HomeNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default AppNavigator;
