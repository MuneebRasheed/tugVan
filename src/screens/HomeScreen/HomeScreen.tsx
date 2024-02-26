import {SafeAreaView, StatusBar, Text,View} from 'react-native';
import React, {FC} from 'react';
import {HomeScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import HomeHeader from '../../component/homeHeader/HomeHeader';
import EarningCard from '../../component/earningCard/EarningCard';
import { iconMapping } from '../../assets/icons/iconMap';
import TaskCard from '../../component/taskCard/TaskCard';
import { TaskCardData } from '../../utils/dummyData';
const HomeScreen: FC<HomeScreenPropsTypes> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.grey100}
        barStyle={'dark-content'}
      />
      <View>
        <HomeHeader/>
        <EarningCard/>
        <View style={styles.logo}>{iconMapping.tugVanLogo}</View>
        <View style={styles.taskWrapper}>
          {TaskCardData.map((task,index)=> <TaskCard key={index} icon={task.icon}  name={task.name} count={task.count}/>)}
        </View>
  
      </View>
     
    </SafeAreaView>
  );
};

export default HomeScreen;
