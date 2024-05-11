import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {CompletedCardPropsTypes} from './types';
import { useNavigation } from '@react-navigation/native';
import { ImageAndName } from '../../utils/dummyData';
const CompletedCard: FC<CompletedCardPropsTypes> = ({icon, name, location,star,distance,type}) => {
  const navigation = useNavigation(); 
  return (
    <TouchableOpacity style={styles.earningCardWrapper} >
      <View style={styles.leftHalf}>{ImageAndName(type)?.image}</View>
      <View style={styles.rightHalf}>
        <View style={styles.firstRow}>
          <View>
            <Text style={styles.textPrice}>{ImageAndName(type)?.name}</Text>
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
      </View>
    </TouchableOpacity>
  );
};

export default CompletedCard;
