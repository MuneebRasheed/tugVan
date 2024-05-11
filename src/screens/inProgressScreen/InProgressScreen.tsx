import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {InProgressScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import InProgressCard from '../../component/InprogressCard/InprogressCard';
import {InprogressData} from '../../utils/dummyData';
import SearchInput from '../../component/searchInput/SearchInput';
import {
  socketServcies,
  socketBiding,
  socketBooking,
} from '../../utils/socketService';
import {APIHANDLER} from '../../services/apiConfig';
import { useSelector, useDispatch } from 'react-redux';
const InProgressScreen: FC<InProgressScreenPropsTypes> = () => {
  const companyId = useSelector(state => state.booking.companyId);
  const InBiddingData = useSelector(state => state.booking.bookings.filter(val=>!val?.bids.includes(companyId)&& (val?.status=="BIDDING")) );
  // console.log("bookings redux",InBiddingData)
 
  // socketBooking.on('newBooking', booking => {
  //   // GetBooking();
  //   console.log('Recieve booking from socket:......... ', booking);
  // });

  const GetBooking = () => {
    APIHANDLER('GET', `api/v2/bookings`, null, '').then(value => {
      if(value?.data?.length>0){
        console.log(value?.data[0])
        SetInBiddingData(value?.data);
      }
    
      console.log('value......', value?.data[0]);
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <SearchInput />
      <ScrollView>
        {InBiddingData?.length > 0 ? (
          InBiddingData?.map((val, index) => (
            <InProgressCard
              icon={val?.icon}
              name={val?.name}
              location={val?.reference_id}
              star={'255/55 R16 '}
              distance={'30km'}
              key={index}
              value={val}
              type={val?.type}
            />
          ))
        ) : (
          <View style={styles.notFoundContainer}>
                   <Text style={styles.text}>No Booking Found </Text>
          </View>
   
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default InProgressScreen;
