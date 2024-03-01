import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React, {FC} from 'react';
import {InProgressScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import InProgressCard from '../../component/InprogressCard/InprogressCard';
import { InprogressData } from '../../utils/dummyData';
const InProgressScreen: FC<InProgressScreenPropsTypes> = () => {
  return (
  
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
        <ScrollView>
    {
      InprogressData.map((val,index)=><InProgressCard  icon={val?.icon} name={val?.name} location={val?.location}star={val?.star}distance={val?.distance} key={index}/>)
    }
      </ScrollView>
     
    </SafeAreaView>
   
  );
};

export default InProgressScreen;
