import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/navigation/bottomTabNavigation';

import {Provider} from 'react-redux';
import store from './src/redux';
import {APIHANDLER} from './src/services/apiConfig';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/loginScreen/LoginScreen';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const getToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
      // You can handle the notification here, e.g., show a local notification
    });
    const token = await messaging().getToken();
    console.log('token....', token);
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    // Foreground message handler
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', remoteMessage);

      // Display an alert with the notification details
      Alert.alert(
        remoteMessage?.notification?.title,
        remoteMessage?.notification?.body,
        [{text: 'OK'}],
      );

      // You can also use a local notification library like `react-native-push-notification` here
    });

    return unsubscribe;
  }, []);
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
