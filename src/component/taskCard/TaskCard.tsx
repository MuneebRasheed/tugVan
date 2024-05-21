import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';

import {TaskCardPropsTypes} from './types';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import strings from '../../utils/strings';
const TaskCard: FC<TaskCardPropsTypes> = ({icon, name, count, onPress}) => {
  const companyId = useSelector(state => state.booking.companyId);
  const InBiddingData = useSelector(state => state.booking.bookings);
  const navigation = useNavigation();
  let Value = count;
  if (name == 'In Bidding') {
    Value = InBiddingData.filter(
      val => val?.bids?.includes(companyId) && val?.status == 'BIDDING',
    )?.length;
  } else if (name == 'Completed') {
    Value = InBiddingData.filter(
      val => val?.bids?.includes(companyId) && val?.status == 'COMPLETED',
    )?.length;
  } else if (name == 'Accepted') {
    Value = InBiddingData.filter(
      val =>
        val?.bids?.includes(companyId) &&
        (val?.status == 'ACCEPTED' || val?.status == 'ACTIVE'),
    )?.length;
  } else if (name == 'Request') {
    Value = InBiddingData.filter(
      val => !val?.bids.includes(companyId) && val?.status == 'BIDDING',
    )?.length;
  }

  const ControlNavigation = () => {
    if (name == 'In Bidding') {
      return navigation.navigate(strings.request, {
        screen: 'InProgress',
        params: {
          screen: 'In Bidding',
        },
      });
    } else if (name == 'Completed') {
      return navigation.navigate(strings.taskCompleted);
    } else if (name == 'Accepted') {
      return navigation.navigate(strings.request, {
        screen: 'InProgress',
        params: {
          screen: 'Accepted',
        },
      });
    } else if (name == 'Request') {
      return navigation.navigate(strings.request, {
        screen: 'InProgress',
        params: {
          screen: 'Request Sent',
        },
      });
    }
  };

  return (
    <View style={styles.earningCardWrapper}>
      <View style={styles.mainHeading}>
        <Text style={styles.textEarning}>{name}</Text>
        <TouchableOpacity
          onPress={() => () => {
            navigation.navigate(strings.request);
          }}>
          {icon}
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textPrice}>{Value}</Text>
      </View>
      <TouchableOpacity
        style={styles.viewAll}
        onPress={() => {
          ControlNavigation();
        }}>
        <Text style={styles.textViewAll}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
