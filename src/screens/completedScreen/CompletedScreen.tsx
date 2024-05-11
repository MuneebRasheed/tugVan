import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React, {FC} from 'react';
import {CompletedScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import CompletedCard from '../../component/completedCard/completedCard';
import { PendingData } from '../../utils/dummyData';
import SearchInput from '../../component/searchInput/SearchInput';
import { useSelector } from 'react-redux';

const CompletedScreen: FC<CompletedScreenPropsTypes> = () => {
  const companyId = useSelector(state => state.booking.companyId);
  const InBiddingData = useSelector(state => state.booking.bookings.filter(val=>val?.bids?.includes(companyId) && (val?.status=="COMPLETED")));
  return (
  
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <SearchInput/>
    
        <ScrollView>
    {/* {
      PendingData.map((val,index)=><CompletedCard  icon={val?.icon} name={val?.name} location={val?.location}star={val?.star}distance={val?.distance} key={index}/>)
    } */}

{InBiddingData?.length > 0 ? (
          InBiddingData?.map((val, index) => (
            <CompletedCard
              icon={val?.icon}
              name={val?.name}
              location={val?.reference_id}
              star={'255/55 R16 '}
              distance={'30km'}
              key={index}
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

export default CompletedScreen;
