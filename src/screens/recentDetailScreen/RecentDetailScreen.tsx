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
import {RecentDetailScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import {mapStyle} from '../../utils/dummyData';
import {socketBiding} from '../../utils/socketService';
import {useRoute} from '@react-navigation/native';
import {APIHANDLER} from '../../services/apiConfig';
const RecentDetailScreen: FC<RecentDetailScreenPropsTypes> = () => {
  const route = useRoute();
  const {value} = route.params;
  const navigation = useNavigation();
  const [price, setPrice] = useState(0);
  // console.log("test....",value)
  const CreateBidding = data => {
    APIHANDLER(
      'POST',
      `api/company-bookings/mobile_app/v2/newBidding`,
      data,
      '',
    ).then(value => {
      console.log('`Bidding created succesfully');
    });
  };

  const Bidding = () => {
    let BiddingValue = {
      name: 'Usman Akram',
      // companyId:"64e6f3aaede060201015de57",//tugvan
      companyId: '64ad31ae785d3f110cb88cbf', // usman akram
      reference_id: value?._id,
      // reference_id:"65f6d0e9b5611430d4e59108",
      carModel: 'Toyota Camry1',
      carType: 'Sedan 1',
      location: 'Airport 1',
      price: price,
      imageSrc:
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    };

    // CreateBidding(BiddingValue)
    console.log('BiddingValue', BiddingValue);
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

        <View style={styles.secondHalf}>
          <View>
            <View style={styles.simpleRow}>
              {iconMapping.tugVanLocation}
              <Text style={styles.textStyle}>{'Highway, London'}</Text>
            </View>
            <View style={styles.line}></View>
          </View>
          <View>
            <View style={styles.simpleRow}>
              {iconMapping.tugVanDistance}
              <Text style={styles.textStyle}>{'Distance :30 Miles'}</Text>
            </View>
            <View style={styles.line}></View>
          </View>
          <View>
            <View style={styles.simpleRow}>
              {iconMapping.tugVanStar}
              <Text style={styles.textStyle}>
                {'Description :Tyre Burst Etc'}
              </Text>
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
              <View style={styles.simpleRow}>
                {iconMapping.tugVanCircle}
                <Text style={styles.textStyle}>{'Tyre Size : 255/55 R16'}</Text>
              </View>
              <View style={styles.simpleRow}>
                {iconMapping.tugVanCircle}
                <Text style={styles.textStyle}>
                  {'Locking Nut Present : Yes'}
                </Text>
              </View>
              <View style={styles.simpleRow}>
                {iconMapping.tugVanCircle}
                <Text style={styles.textStyle}>
                  {'Locking Nut Required : No'}
                </Text>
              </View>
              <View style={styles.simpleRow}>
                {iconMapping.tugVanCircle}
                <Text style={styles.textStyle}>{'Puncture Service: Yes'}</Text>
              </View>
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
              <Text style={styles.textViewAll}>{strings.offerYourFare}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default RecentDetailScreen;
