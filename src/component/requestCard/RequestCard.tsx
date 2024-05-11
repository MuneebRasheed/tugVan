import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {RequestCardPropsTypes} from './types';
import { useNavigation } from '@react-navigation/native';
import { ImageAndName } from '../../utils/dummyData';
const RequestCard: FC<RequestCardPropsTypes> = ({icon, name, location,star,distance,value,type}) => {
  const navigation = useNavigation(); 
  const startWorkingHandler = () => {
    navigation.navigate('LiveTrackingScreen', {
      latitude: 31.657284602508824, 
      longitude: 73.93410977049
    });
  };
  return (
    <View style={styles.earningCardWrapper} >
      <View style={styles.leftHalf}>{ImageAndName(type).image}</View>
      <View style={styles.rightHalf}>
        <View style={styles.firstRow}>
          <View>
            <Text style={styles.textPrice}>{ImageAndName(type).name}</Text>
          </View>
          <View></View>
        </View>
        <View style={styles.secondRow}>
          <View style={styles.directionRow}>
            {iconMapping.tugVanLocation}
            <Text style={styles.textViewAll}>{location}</Text>
          </View>
          <View style={styles.directionRow}>
            {iconMapping.tugVanDistance}
            <Text style={styles.textViewAll}>{strings?.distance+': '+distance}</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.secondRow}>
        <TouchableOpacity style={styles.directionRow}    >
          {iconMapping.tugVanStar}
          <Text style={styles.textViewAll}>
            {strings?.product+':'+star}
          </Text>
        </TouchableOpacity>
        <View style={styles.directionRow}>
            {iconMapping.tugVanPaymentCardBlue}
            <Text style={styles.textPayment}>{strings?.fare+': £42'}</Text>
          </View>
          </View>
          <View style={styles.secondRow}>
          <View style={styles.directionRow}>
        <TouchableOpacity style={styles.viewAllWorking} onPress={startWorkingHandler}><Text style={styles.textViewAllButton}>Start Working</Text></TouchableOpacity>
            
          </View>
        <View style={styles.directionRow}>
        <TouchableOpacity onPress={()=>{navigation.navigate("MessageScreen")}}style={styles.viewAll}><Text style={styles.textViewAllButton}>Chat</Text></TouchableOpacity>
            
          </View>
          </View>
      </View>
    </View>
  );
};

export default RequestCard;
