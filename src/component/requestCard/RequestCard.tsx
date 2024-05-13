import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {RequestCardPropsTypes} from './types';
import {useNavigation} from '@react-navigation/native';
import {ImageAndName} from '../../utils/dummyData';
import {APIHANDLER} from '../../services/apiConfig';
import { useDispatch, UseDispatch } from 'react-redux';
import { setUpdateStatus } from '../../redux/slices/bookingSlice';
const RequestCard: FC<RequestCardPropsTypes> = ({
  icon,
  name,
  location,
  star,
  distance,
  value,
  type,
  directions,
  status,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const startWorkingHandler = () => {
    navigation.navigate('LiveTrackingScreen', {
      latitude: directions.lat,
      longitude: directions.lng,
    });
  };
  const UpdateStatus = data => {
    APIHANDLER(
      'POST',
      `api/company-bookings/mobile_app/updateStatus`,
      data,
      '',
    ).then(value => {
     
      console.log('`Bidding created succesfully');
    });
  };
  return (
    <View style={styles.earningCardWrapper}>
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
            <Text style={styles.textViewAll}>
              {strings?.distance + ': ' + distance}
            </Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.secondRow}>
          <TouchableOpacity style={styles.directionRow}>
            {iconMapping.tugVanStar}
            <Text style={styles.textViewAll}>
              {strings?.product + ':' + star}
            </Text>
          </TouchableOpacity>
          <View style={styles.directionRow}>
            {iconMapping.tugVanPaymentCardBlue}
            <Text style={styles.textPayment}>{strings?.fare + ': £42'}</Text>
          </View>
        </View>
        <View style={styles.secondRow}>
          <View style={styles.directionRow}>
            <TouchableOpacity
              style={styles.viewAllWorking}
              onPress={() => {
                dispatch(setUpdateStatus({id:value._id,body:{status:"ACTIVE"}}))
                if (status == 'ACCEPTED') {
                  UpdateStatus(value);
                
                }
                startWorkingHandler()
                
               
              }}>
              <Text style={styles.textViewAllButton}>{status == 'ACCEPTED'?"Start Working":"Live Track"
                 
                }</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.directionRow}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MessageScreen');
              }}
              style={styles.viewAll}>
              <Text style={styles.textViewAllButton}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RequestCard;
