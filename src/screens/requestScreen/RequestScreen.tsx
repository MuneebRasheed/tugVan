import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React, {FC} from 'react';
import {RequestScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import { PendingData } from '../../utils/dummyData';
import RequestCard from '../../component/requestCard/RequestCard';
import SearchInput from '../../component/searchInput/SearchInput';

const RequestScreen: FC<RequestScreenPropsTypes> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <SearchInput/>
      <ScrollView>
      {
      PendingData.map((val,index)=><RequestCard  icon={val?.icon} name={val?.name} location={val?.location}star={val?.star}distance={val?.distance} key={index}/>)
    }
    </ScrollView>

    </SafeAreaView>
  );
};

export default RequestScreen;
