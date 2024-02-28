import {SafeAreaView, StatusBar, Text, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {RecentDetailScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import MapView, {Marker} from 'react-native-maps';
const RecentDetailScreen: FC<RecentDetailScreenPropsTypes> = () => {
  const mapStyle = [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}],
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      

      <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}
          
          >
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
              <Text style={styles.textStyle}>
                {'Puncture Service: Yes'}
              </Text>
            </View>
          </View>
          <View style={styles.textFieldWrap}>
            <View >{iconMapping.tugVanFare}</View>
          <TextInput placeholder='Enter Fare £' style={styles.textField}
            placeholderTextColor="white"
          />
          </View>
           
          <View style={styles.viewAll}><Text style={styles.textViewAll}>{strings.offerYourFare}</Text></View>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default RecentDetailScreen;
