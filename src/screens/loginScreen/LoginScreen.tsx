import {
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useState} from 'react';
import {LoginScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import {useNavigation} from '@react-navigation/native';
import {APIHANDLER} from '../../services/apiConfig';
import {ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import {setBookings} from '../../redux/slices/bookingSlice';
import {setUser} from '../../redux/slices/userSlice';
const LoginScreen: FC<LoginScreenPropsTypes> = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('usman.akram@gmail.com');
  const [password, setPassword] = useState('usman');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const Login = async data => {
    setLoading(true); // Start loading
    try {
      const response = await APIHANDLER('POST', `api/auth`, data, '');
      console.log('Login Successfully ', response?.data);
      console.log('Login Successfully ', response?.status);
      if (response?.status == 200) {
        dispatch(setUser(response?.data));
      }
      GetBooking();
      // Stop loading
      // navigation.navigate('HomeTabs'); // Navigate to HomeTabs on successful login
    } catch (error) {
      console.error('Login Error: ', error);
      setLoading(false); // Stop loading
    }
  };

  const GetBooking = () => {
    APIHANDLER('GET', `api/v2/bookings`, null, '').then(value => {
      if (value?.data?.length > 0) {
        console.log(value?.data[0]);
        dispatch(setBookings(value?.data));
        setLoading(false);
        navigation?.replace('HomeTabs');
      }
    });
  };
  const validatePassword = password => {
    return password.length >= 4;
  };

  const handleLogin = () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      console.log('Email:', email);
      console.log('Password:', password);
      Login({email, password});
      // navigation.navigate('HomeTabs');
      // Alert.alert('Login Success', `Email: ${email}\nPassword: ${password}`);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <View style={styles.logo}>{iconMapping.tugVanLogo}</View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.text}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
