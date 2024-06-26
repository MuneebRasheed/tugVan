import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import strings from '../utils/strings';
import React from 'react';
import InProgressScreen from '../screens/inProgressScreen/InProgressScreen';

import {Image} from 'react-native';
import {Images} from '../assets/images';
import {iconMapping} from '../assets/icons/iconMap'
import {Colors} from '../utils/colors';
// import MessageScreen from '../screens/messageScreen/MessageScreen';
import AppConfig from '../utils/config';
import TopTabsNavigation from './topTabNavigation';
import StackNavigation from './stackNavigation';
import RequestScreen from '../screens/requestScreen/RequestScreen';
import StackNavigationInProgress from './stackNavigationInProgress';
import PerformanceDetailScreen from '../screens/performanceDetailScreen/PerformanceDetailScreen';
import CompletedScreen from '../screens/completedScreen/CompletedScreen';
const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  const config = AppConfig();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryColors.yellow,
        tabBarInactiveTintColor: Colors.primaryColors.secondaryGrey,
        tabBarStyle: {backgroundColor: config.secondaryColor},
        tabBarLabelStyle: {
          fontWeight: '500',
          paddingBottom: 2,
          lineHeight: 13,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: strings.home,
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.homeIcon}
              style={{
                tintColor: focused
                  ? Colors.primaryColors.yellow
                  : Colors.primaryColors.black,
              }}
            />
          ),
        }}
        name={strings.home}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: strings.request,
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.profileIcon}
              style={{
                tintColor: focused
                  ? Colors.primaryColors.yellow
                  : Colors.primaryColors.black,
              }}
            />
          ),
        }}
        name={strings.request}
       
        component={StackNavigation}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: strings.taskCompleted,
          
          tabBarIcon: ({focused}) => (
            iconMapping?.tugVanInprogress
          ),
        }}
        name={ strings.taskCompleted}
        
        component={CompletedScreen}
      />
    
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: strings.settings,
          tabBarIcon: ({focused}) => (
            iconMapping?.settings
            
          ),
        }}
        name={strings.settings}
        component={PerformanceDetailScreen}
      />
      
    </Tab.Navigator>
  );
};

export default BottomNavigation;
