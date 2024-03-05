import {SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {PendingDetailScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

import { mapStyle } from '../../utils/dummyData';
const PendingDetailScreen: FC<PendingDetailScreenPropsTypes> = () => {

  const navigation = useNavigation();
  
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />

      <TouchableOpacity style={styles.header} onPress={()=>navigation.goBack()}>
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
              value="£ 42"
            />
          </View>

          <View style={styles.viewAll}>
            <Text style={styles.textViewAll}>{strings.updateFare}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default PendingDetailScreen;
