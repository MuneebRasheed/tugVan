import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React, {FC} from 'react';
import {PendingScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import PendingCard from '../../component/pendingCard/pendingCard';
import { PendingData } from '../../utils/dummyData';
const PendingScreen: FC<PendingScreenPropsTypes> = () => {
  return (
  
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
        <ScrollView>
    {
      PendingData.map((val,index)=><PendingCard  icon={val?.icon} name={val?.name} location={val?.location}star={val?.star}distance={val?.distance} key={index}/>)
    }
      </ScrollView>
     
    </SafeAreaView>
   
  );
};

export default PendingScreen;
