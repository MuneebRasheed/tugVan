
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, PermissionsAndroid, Alert, Platform } from 'react-native';
import { Image } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';

const LiveTrackingScreen = ({ route }) => {
  const { latitude: destLatitude, longitude: destLongitude } = route.params;
  const [userLocation, setUserLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [watchId, setWatchId] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const checkLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location to show it on the map.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          checkLocationServices();
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const checkLocationServices = () => {
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          fetchDirections(latitude, longitude, destLatitude, destLongitude);
          startWatchPosition();
        },
        error => {
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
              { cancelable: false }
            );
          }
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };

    const reloadScreen = () => {
      navigation.replace('LiveTrackingScreen', route.params);
    };

    const startWatchPosition = () => {
      const id = Geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          updatePolyline(latitude, longitude);
        },
        error => console.error(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
      setWatchId(id);
    };

    checkLocationPermission();

    return () => {
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
  
    try {
      const routeCoordinates = await fetchDirections(startLat, startLng, endLat, endLng);
      setRouteCoordinates(routeCoordinates);
    } catch (error) {
      console.error('Error updating polyline:', error);
    }
  };
  
  
  
  const fetchDirections = async (startLat, startLng, endLat, endLng) => {
    console.log('Fetching directions with parameters:', startLat, startLng, endLat, endLng);
  
    const apiKey = "AIzaSyBxlCPMKTJnAEuy43rjvfhkZ8twF0Wumdo";
    const apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLat},${startLng}&destination=${endLat},${endLng}&key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log('Directions data:', data);
  
      if (data.routes.length) {
        const route = data.routes[0];
        const routeCoordinates = decodePolyline(route.overview_polyline.points);
        console.log('Decoded polyline:', routeCoordinates);
        return routeCoordinates;
      } else {
        throw new Error('No route found');
      }
    } catch (error) {
      console.error('Error fetching directions:', error);
      throw new Error('Error fetching directions:', error);
    }
  };
  
  
  const decodePolyline = (encoded) => {
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

      let latlng = { latitude: lat / 1e5, longitude: lng / 1e5 };
      poly.push(latlng);
    }
    return poly;
  };
  return (
    <View style={styles.container}>
      {userLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: destLatitude, longitude: destLongitude }} title="Destination" />
          <Marker
            coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }}
            title="Your Location"
          >
            <Image
              source={require('./van.png')} 
              style={{ width: 32, height: 32 }} 
            />
          </Marker>
          <Polyline coordinates={routeCoordinates} strokeColor="#7ABA78" strokeWidth={6} />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default LiveTrackingScreen;
