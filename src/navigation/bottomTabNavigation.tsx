import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import strings from '../utils/strings';
import React, { useEffect } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { setBookings, setLoading, setError ,setOneBookings} from '../redux/slices/bookingSlice'
import { APIHANDLER } from '../services/apiConfig';
import {socketServcies,socketBiding,socketBooking} from '../utils/socketService';
const BottomNavigation = () => {
  const dispatch = useDispatch();
  const Tab = createBottomTabNavigator();
  const config = AppConfig();
  const GetBooking = () => {
    APIHANDLER('GET', `api/v2/bookings`, null, '').then(value => {
      if(value?.data?.length>0){
        console.log(value?.data[0])
        dispatch(setBookings(value?.data));
       
      }
    
      console.log('value......', value?.data[0]);
    });
  };
  useEffect(()=>{

    GetBooking()
  },[])

  useEffect(()=>{
    socketServcies.initializeSocket()
    socketBiding.on('connect', () => {
     
      console.log('Socket.IO connection established at /v2/biding');
    });
    socketBooking.on('connect', () => {
     
      console.log('Socket.IO connection established at /v2/booking');
    });
   
  },[])
  socketBooking.on('newBooking', booking => {
    // GetBooking();
    dispatch(setOneBookings(booking?._doc));
    console.log('Recieve booking from socket:......... ', booking?._doc);
  });
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
