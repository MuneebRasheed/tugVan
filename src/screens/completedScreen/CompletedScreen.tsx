import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React, {FC} from 'react';
import {CompletedScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import CompletedCard from '../../component/completedCard/completedCard';
import { PendingData } from '../../utils/dummyData';
import SearchInput from '../../component/searchInput/SearchInput';
const CompletedScreen: FC<CompletedScreenPropsTypes> = () => {
  return (
  
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <SearchInput/>
        <ScrollView>
    {
      PendingData.map((val,index)=><CompletedCard  icon={val?.icon} name={val?.name} location={val?.location}star={val?.star}distance={val?.distance} key={index}/>)
    }
      </ScrollView>
     
    </SafeAreaView>
   
  );
};

export default CompletedScreen;
