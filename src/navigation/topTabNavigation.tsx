import React ,{useState}from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import { Colors } from '../utils/colors';
import AppConfig from '../utils/config';
import InProgressScreen from '../screens/inProgressScreen/InProgressScreen';

import PendingScreen from '../screens/pendingScreen/PendingScreen';
import CompletedScreen from '../screens/completedScreen/CompletedScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import RequestScreen from '../screens/requestScreen/RequestScreen';
import StackNavigationInProgress from './stackNavigationInProgress';
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
        tabBarLabelStyle: { fontSize: 14,fontWeight:'600' ,color:Colors.primaryColors.yellow},
        tabBarStyle: {  
          // marginHorizontal:15,
          // borderRadius:10,
          marginTop:10,
          marginBottom:2,    
        },
        tabBarIndicatorStyle: {
            height: '100%',
            backgroundColor: AppConfig().primaryColor,
            borderBottomWidth: 1.5,
            borderBottomColor: AppConfig().primaryColor,
         
           
            // ...finalResult
        }
      }}>
      <Tab.Screen name="In Bidding" component={InProgressScreen}  />
      <Tab.Screen name="Request Sent" component={PendingScreen} />
      <Tab.Screen name="Accepted " component={StackNavigationInProgress} />
    </Tab.Navigator>
    </>
  );
}

export default TopTabsNavigation;