import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import AddNewScreen from '../screens/addNewScreen/AddNewScreen';
import { Colors } from '../utils/colors';
import InProgressScreen from '../screens/inProgressScreen/InProgressScreen';
import RecentDetailScreen from '../screens/recentDetailScreen/RecentDetailScreen';
import PendingScreen from '../screens/pendingScreen/PendingScreen';
const TopTabsNavigation=()=> {

  return (
 <>

    <Tab.Navigator 
    screenOptions={{
        tabBarLabelStyle: { fontSize: 14,fontWeight:'600' },
        // tabBarStyle: {  marginHorizontal:15,borderRadius:10,marginTop:20},
        tabBarIndicatorStyle: {
            height: '100%',
            backgroundColor: Colors.primaryColors.yellow,
            borderBottomWidth: 1.5,
            borderBottomColor: Colors.primaryColors.yellow,
        }
      }}>
      <Tab.Screen name="Recent" component={InProgressScreen}  />
      <Tab.Screen name="Pending" component={PendingScreen} />
      <Tab.Screen name="Completed" component={AddNewScreen} />
    </Tab.Navigator>
    </>
  );
}

export default TopTabsNavigation;