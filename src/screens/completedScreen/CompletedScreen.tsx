import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {CompletedScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import CompletedCard from '../../component/completedCard/completedCard';
import SearchInput from '../../component/searchInput/SearchInput';
import {useSelector} from 'react-redux';

const CompletedScreen: FC<CompletedScreenPropsTypes> = () => {
  const companyId = useSelector(state => state.user.companyId);
  const [booking, setBooking] = useState([]);
  const InBiddingData = useSelector(state =>
    state.booking.bookings.filter(
      val =>
        val?.bids?.includes(companyId) &&
        val?.status == 'COMPLETED' &&
        val?.company == companyId,
    ),
  );
  useEffect(() => {
    setBooking(InBiddingData);
  }, [InBiddingData?.length]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <SearchInput
        value={booking}
        setValue={setBooking}
        copyData={InBiddingData}
      />

      <ScrollView>
        {/* {
      PendingData.map((val,index)=><CompletedCard  icon={val?.icon} name={val?.name} location={val?.location}star={val?.star}distance={val?.distance} key={index}/>)
    } */}

        {booking?.length > 0 ? (
          booking?.map((val, index) => (
            <CompletedCard
              icon={val?.icon}
              name={val?.name}
              location={val?.from_desc?.split(' ')[0]}
              star={val?.requirements?.Description}
              distance={val?.reference_id}
              key={index}
              type={val?.type}
              fare={val?.priceToCharge}
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
