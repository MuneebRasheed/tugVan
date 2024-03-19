import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {PerformanceDetailScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import ChatHeader from '../../component/chatHeader/ChatHeader';
import Chart from '../../component/chart/Chart';
import PerformanceCard from '../../component/performanceCard/PerformanceCard';
import DurationButtons from '../../component/DurationButton/DurationButton';
const PerformanceDetailScreen: FC<PerformanceDetailScreenPropsTypes> = () => {
  const [bool,setBool]=useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
   
      <ChatHeader title={"Preformance Details"}/>
      <DurationButtons setBool={()=>setBool(pre=>!pre)}/>
      <Chart/>
      <View style={styles.line}></View>
      <View style={styles?.textFlex}><Text style={styles?.textStyle}>Earning</Text></View>
      <PerformanceCard/>
   
    </SafeAreaView>
  );
};

export default PerformanceDetailScreen;
