import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import MessageScreen from '../screens/messageScreen/MessageScreen';


import RequestScreen from '../screens/requestScreen/RequestScreen';
function StackNavigationInProgress() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}
    //   initialRouteName="InProgress"
      >

      <Stack.Screen name="RequestScreen" component={RequestScreen} />

      <Stack.Screen name="MessageScreen" component={MessageScreen} />

    </Stack.Navigator>
  );
}

export default StackNavigationInProgress 