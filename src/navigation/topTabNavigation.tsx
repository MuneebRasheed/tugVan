import React ,{useState}from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import { Colors } from '../utils/colors';
import InProgressScreen from '../screens/inProgressScreen/InProgressScreen';

import PendingScreen from '../screens/pendingScreen/PendingScreen';
import CompletedScreen from '../screens/completedScreen/CompletedScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const TopTabsNavigation=({ navigation, route })=> {
const [activeTab,setActiveTab]= useState("Recent")
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
   
    setActiveTab(routeName)
    
  }, [route]);
  let leftRadius={
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
  }
  let rightRadius={
    borderTopRightRadius:10,
    borderBottomRightRadius:10
  }
  let finalResult= activeTab=="Completed"?rightRadius:activeTab=="Recent"?leftRadius:{}
  return (
 <>

    <Tab.Navigator 
    screenOptions={{
        tabBarLabelStyle: { fontSize: 14,fontWeight:'600' },
        tabBarStyle: {  marginHorizontal:15,borderRadius:10,marginTop:10,marginBottom:10},
        tabBarIndicatorStyle: {
            height: '100%',
            backgroundColor: Colors.primaryColors.yellow,
            borderBottomWidth: 1.5,
            borderBottomColor: Colors.primaryColors.yellow,
           
            ...finalResult
        }
      }}>
      <Tab.Screen name="Recent" component={InProgressScreen}  />
      <Tab.Screen name="Pending" component={PendingScreen} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
    </Tab.Navigator>
    </>
  );
}

export default TopTabsNavigation;