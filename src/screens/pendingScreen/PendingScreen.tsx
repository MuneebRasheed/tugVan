import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {PendingScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import PendingCard from '../../component/pendingCard/pendingCard';
import {PendingData} from '../../utils/dummyData';
import SearchInput from '../../component/searchInput/SearchInput';
import {useSelector} from 'react-redux';

const PendingScreen: FC<PendingScreenPropsTypes> = () => {
  const companyId = useSelector(state => state.user.companyId);
  const InBiddingData = useSelector(state =>
    state.booking.bookings.filter(
      val => val?.bids?.includes(companyId) && val?.status == 'BIDDING',
    ),
  );
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(InBiddingData);
  }, [InBiddingData?.length]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <SearchInput
        value={data}
        setValue={val => setData(val)}
        copyData={InBiddingData}
      />
      <ScrollView>
        {/* {
      PendingData.map((val,index)=><PendingCard  icon={val?.icon} name={val?.name} location={val?.location}star={val?.star}distance={val?.distance} key={index}/>)
    } */}

        {data?.length > 0 ? (
          data?.map((val, index) => (
            <PendingCard
              icon={val?.icon}
              name={val?.name}
              location={val?.from_desc?.split(' ')[0]}
              star={val?.requirements?.Description}
              distance={val?.reference_id}
              key={index}
              value={val}
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

export default PendingScreen;
