import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import {PendingDetailScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';

import {mapStyle} from '../../utils/dummyData';
import {useSelector} from 'react-redux';
import {APIHANDLER} from '../../services/apiConfig';
import {socketBiding} from '../../utils/socketService';
const PendingDetailScreen: FC<PendingDetailScreenPropsTypes> = () => {
  const route = useRoute();
  const {value} = route.params;
  const navigation = useNavigation();
  const [price, setPrice] = useState(0);
  // console.log("test....",value)
  const Info = useSelector(value => value?.user?.user);
  const companyId = useSelector(value => value?.user?.companyId);
  console.log('value....', value);
  const Bidding = () => {
    let BiddingValue = {
      name: 'Usman Akram',
      // companyId:"64e6f3aaede060201015de57",//tugvan
      // companyId: '64ad31ae785d3f110cb88cbf', // usman akram
      companyId: companyId,
      reference_id: value?._id,
      officeLocation: 'Lahore',
      // reference_id:"65f6d0e9b5611430d4e59108",
      carModel: 'Toyota Camry1',
      carType: 'Sedan 1',
      location: 'Airport 1',
      price: price,
      imageSrc:
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
      logo:
        Info?.data?.companyLogo ||
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
      pickupTime: new Date() || '2024-12-02T16:47:03.921Z',
    };

    console.log('BiddingValue', BiddingValue);
    // CreateBidding(BiddingValue);
    socketBiding.emit('upcomingBooking', {data: BiddingValue});
    navigation.goBack();
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />

        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.goBack()}>
          {iconMapping.tugVanLeftArrow}
          <Text style={styles.HeadingText}>{strings.bookingDetails}</Text>
        </TouchableOpacity>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
        <ScrollView>
          <View style={styles.secondHalf}>
            <View>
              <View style={styles.simpleRow}>
                {iconMapping.tugVanLocation}
                <Text
                  style={styles.textStyle}>{`From :${value?.from_desc}`}</Text>
              </View>
              <View style={styles.line}></View>
            </View>
            {value?.type == 'RECOVERY' && (
              <View>
                <View style={styles.simpleRow}>
                  {iconMapping.tugVanDistance}
                  <Text
                    style={styles.textStyle}>{`To :${value?.to_desc}`}</Text>
                </View>
                <View style={styles.line}></View>
              </View>
            )}
            <View>
              <View style={styles.simpleRow}>
                {iconMapping.tugVanStar}
                <Text style={styles.textStyle}>{`Type : ${value?.type}`}</Text>
              </View>
              <View style={styles.line}></View>
            </View>
            <View>
              <View style={styles.simpleRow}>
                {iconMapping.tugVanStar}
                <Text style={styles.textStyle}>{'Details :'}</Text>
              </View>
              <View style={styles.line}></View>
              <View style={styles.detail}>
                {Object.entries(value?.requirements).map(([key, value]) => (
                  <View style={styles.simpleRow} key={key}>
                    {iconMapping.tugVanCircle}
                    <Text style={styles.textStyle}> {`${key} : ${value}`}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.textFieldWrap}>
                <View>{iconMapping.tugVanFare}</View>
                <TextInput
                  placeholder="Enter Fare £"
                  style={styles.textField}
                  placeholderTextColor="white"
                  onChangeText={e => setPrice(e)}
                />
              </View>

              <TouchableOpacity style={styles.viewAll} onPress={Bidding}>
                <Text style={styles.textViewAll}>{strings.updateFare}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PendingDetailScreen;
