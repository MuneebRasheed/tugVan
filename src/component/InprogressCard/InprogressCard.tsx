import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {TaskCardPropsTypes} from './types';
import { useNavigation } from '@react-navigation/native';
const InProgressCard: FC<TaskCardPropsTypes> = ({icon, name, location,star,distance,value}) => {
  const navigation = useNavigation(); 
  return (
    <TouchableOpacity style={styles.earningCardWrapper} onPress={() => navigation.navigate('RecentDetailScreen',{value:value})}>
      <View style={styles.leftHalf}>{iconMapping?.tugVanTyre}</View>
      <View style={styles.rightHalf}>
        <View style={styles.firstRow}>
          <View>
            <Text style={styles.textPrice}>{strings.tyreFitter}</Text>
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
        <TouchableOpacity style={styles.directionRow}    >
          {iconMapping.tugVanStar}
          <Text style={styles.textViewAll}>
            {strings?.product+':'+star}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default InProgressCard;
