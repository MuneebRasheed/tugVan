import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {pendingCardPropsTypes} from './types';
import { useNavigation } from '@react-navigation/native';
const PendingCard: FC<pendingCardPropsTypes> = ({icon, name, location,star,distance}) => {
  const navigation = useNavigation(); 
  return (
    <TouchableOpacity style={styles.earningCardWrapper} onPress={() => navigation.navigate('RecentDetailScreen')}>
      <View style={styles.leftHalf}>{icon}</View>
      <View style={styles.rightHalf}>
        <View style={styles.firstRow}>
          <View>
            <Text style={styles.textPrice}>{name}</Text>
          </View>
          <View>{iconMapping.tugVanCross}</View>
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
      </View>
    </TouchableOpacity>
  );
};

export default PendingCard;
