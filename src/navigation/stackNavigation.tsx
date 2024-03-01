import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import InProgressScreen from '../screens/inProgressScreen/InProgressScreen';
import RecentDetailScreen from '../screens/recentDetailScreen/RecentDetailScreen';
import TopTabsNavigation from './topTabNavigation';
function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}
    //   initialRouteName="InProgress"
      >
      <Stack.Screen name="InProgress"  component={TopTabsNavigation}  />
      <Stack.Screen name="RecentDetailScreen" component={RecentDetailScreen} />

      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default StackNavigation 