import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {TaskCardPropsTypes} from './types';
const InProgressCard: FC<TaskCardPropsTypes> = ({icon, name, location,star,distance}) => {
  return (
    <View style={styles.earningCardWrapper}>
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
        <View style={styles.directionRow}>
          {iconMapping.tugVanStar}
          <Text style={styles.textViewAll}>
            {strings?.product+':'+star}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InProgressCard;
