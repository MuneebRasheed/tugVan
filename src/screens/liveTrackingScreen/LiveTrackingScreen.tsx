import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  PermissionsAndroid,
  Alert,
  Platform,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Image} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import {iconMapping} from '../../assets/icons/iconMap';
import ShowMessage from '../../component/Toast';
import AppConfig from '../../utils/config';
import {Colors} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import DurationButtons from '../../component/DurationButton/DurationButton';
import {APIHANDLER} from '../../services/apiConfig';
import {trackingSocket} from '../../utils/socketService';
const LiveTrackingScreen = ({route}) => {
  const {value} = route.params;
  const destLatitude = parseFloat(route.params.latitude);
  const destLongitude = parseFloat(route.params.longitude);
  const [userLocation, setUserLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [watchId, setWatchId] = useState(null);
  const navigation = useNavigation();
  const [coordinates, setCordinates] = useState({
    destLat: destLatitude,
    destLng: destLongitude,
    startLat: 31.33959182,
    startLng: 74.3875178,
  });
  const config = AppConfig();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('LiveTrackingScreen mounted');

    const checkLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'This app needs access to your location to show it on the map.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          checkLocationServices();
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const checkLocationServices = () => {
      console.log('Checking location services');
      Geolocation.getCurrentPosition(
        position => {
          console.log('Current position:', position);
          const {latitude, longitude} = position.coords;
          setUserLocation({latitude, longitude});
          updatePolyline(latitude, longitude);
          startWatchPosition();
        },
        error => {
          // console.error('Geolocation error:', error);
          if (error.code === 2) {
            Alert.alert(
              'Location Services Disabled',
              'Please enable location services to use this feature.',
              [
                {
                  text: 'Try Again',
                  onPress: () => reloadScreen(),
                },
                {
                  text: 'Cancel',
                  onPress: () => navigation.goBack(),
                  style: 'cancel',
                },
              ],
              {cancelable: false},
            );
          }
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
    };

    const reloadScreen = () => {
      navigation.replace('LiveTrackingScreen', route.params);
    };

    const startWatchPosition = () => {
      console.log('Starting watch position');
      const id = Geolocation.watchPosition(
        position => {
          console.log('Watch position:', position);
          const {latitude, longitude} = position.coords;
          setUserLocation({latitude, longitude});
          updatePolyline(latitude, longitude);
        },
        error => {
          // console.error(error);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
      setWatchId(id);
    };

    checkLocationPermission();

    return () => {
      console.log('Cleaning up');
      if (watchId !== null) {
        Geolocation.clearWatch(watchId);
      }
    };
  }, []);

  const updatePolyline = async (latitude, longitude) => {
    const startLat = latitude;
    const startLng = longitude;
    const endLat = destLatitude;
    const endLng = destLongitude;
    setCordinates({
      destLat: endLat,
      destLng: endLng,
      startLat: startLat,
      startLng: startLng,
    });

    try {
      const routeCoordinates = await fetchDirections(
        startLat,
        startLng,
        endLat,
        endLng,
      );
      if (routeCoordinates) {
        setRouteCoordinates(routeCoordinates);
      } else {
        // Route not found, display a message to the user
        console.log('Route not found');
        // You can set a state variable here to display a message on the screen
      }
    } catch (error) {
      // console.error('Error updating polyline:', error);
    }
  };

  const fetchDirections = async (startLat, startLng, endLat, endLng) => {
    console.log(
      'Fetching directions with parameters:',
      startLat,
      startLng,
      endLat,
      endLng,
    );

    setCordinates({
      destLat: endLat,
      destLng: endLng,
      startLat: startLat,
      startLng: startLng,
    });
    trackingSocket.emit('realTimeTracking', {data: 'Data'});

    const apiKey = 'AIzaSyBxlCPMKTJnAEuy43rjvfhkZ8twF0Wumdo';
    const apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLat},${startLng}&destination=${endLat},${endLng}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.routes.length) {
        const route = data.routes[0];
        const routeCoordinates = decodePolyline(route.overview_polyline.points);
        return routeCoordinates;
      } else {
        // No route found, return null
        return null;
      }
    } catch (error) {
      // console.error('Error fetching directions:', error);
      throw new Error('Error fetching directions:', error);
    }
  };

  const decodePolyline = encoded => {
    let poly = [];
    let index = 0,
      len = encoded.length;
    let lat = 0,
      lng = 0;

    while (index < len) {
      let b,
        shift = 0,
        result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
      lat += dlat;
      shift = 0;
      result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      let latlng = {latitude: lat / 1e5, longitude: lng / 1e5};
      poly.push(latlng);
    }
    return poly;
  };

  const SendOTP = () => {
    APIHANDLER('GET', `api/booking/otp/${value?._id}`, null, '').then(
      values => {
        setIsLoading(false);
        navigation.navigate('OTPScreen', {value: value});
        ShowMessage('OTP SEND TO USER EMAIL SUCCESSFULLY');
      },
    );
  };

  const sendLocation = () => {
    APIHANDLER('Post', `api/v2/bookings/tracking`, coordinates, '').then(
      values => {
        console.log('Send data successfully');
      },
    );
  };
  useEffect(() => {
    const interval = setInterval(sendLocation, 10000); // 10000ms = 10 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('./arrow.png')}
          style={{width: 32, height: 32}}
        />
      </TouchableOpacity>
      {userLocation ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: userLocation?.latitude,
            longitude: userLocation?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{latitude: destLatitude, longitude: destLongitude}}
            title="Destination"
          />
          <Marker
            coordinate={{
              latitude: userLocation?.latitude,
              longitude: userLocation?.longitude,
            }}
            title="Your Location">
            <Image
              source={require('./van.png')}
              style={{width: 32, height: 32}}
            />
          </Marker>
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#7ABA78"
            strokeWidth={6}
          />
        </MapView>
      ) : (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{latitude: destLatitude, longitude: destLongitude}}
            title="Destination"
          />
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title="Your Location">
            <Image
              source={require('./van.png')}
              style={{width: 32, height: 32}}
            />
          </Marker>
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#7ABA78"
            strokeWidth={6}
          />
        </MapView>
      )}
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
                <Text style={styles.textStyle}>{`To :${value?.to_desc}`}</Text>
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

            <TouchableOpacity
              style={styles.viewAll}
              onPress={() => {
                setIsLoading(true);
                SendOTP();
              }}>
              {isLoading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.textViewAll}>Complete</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: Dimensions.get('window').height / 2.5,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  detailsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFA62F',
    borderRadius: 10,
  },
  detailsText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  secondHalf: {
    marginTop: windowHeight / 50,
    height: '100%',
    width: '100%',
    backgroundColor: Colors.primaryColors.white,
    padding: 10,
    gap: 15,
  },
  textStyle: {
    fontSize: 14,
    color: Colors.primaryColors.grey2,
  },
  simpleRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  line: {
    marginTop: 5,
    backgroundColor: Colors.primaryColors.grey2,
    height: 1,
    marginLeft: 25,
  },
  detail: {
    paddingLeft: 50,
    marginTop: 10,
    gap: 10,
  },
  textFieldWrap: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 20,
    paddingLeft: 20,
    width: windowWidth / 1.5,
    borderRadius: 10,
    marginTop: 20,
  },
  textField: {
    width: windowWidth / 1.9,
    borderColor: Colors.primaryColors.white,
    borderLeftWidth: 1,
    color: 'white',
    paddingHorizontal: 10,
  },
  viewAll: {
    backgroundColor: Colors.primaryColors.yellow,
    height: windowHeight / 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '93%',
  },
  textViewAll: {
    color: Colors.primaryColors.blue,
    fontWeight: '800',
    fontSize: 16,
  },
});

export default LiveTrackingScreen;
