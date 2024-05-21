import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/navigation/bottomTabNavigation';

import {Provider} from 'react-redux';
import store from './src/redux';
import {APIHANDLER} from './src/services/apiConfig';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/loginScreen/LoginScreen';
function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeTabs"
            component={BottomNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
