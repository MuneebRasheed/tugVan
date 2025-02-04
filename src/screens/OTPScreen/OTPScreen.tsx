import React, {FC, useRef, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
  Button,
  Alert,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {OTPScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import {useNavigation} from '@react-navigation/native';
import {APIHANDLER} from '../../services/apiConfig';
import ShowMessage from '../../component/Toast';
import {setUpdateStatus} from '../../redux/slices/bookingSlice';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import strings from '../../utils/strings';
const OTPScreen: FC<OTPScreenPropsTypes> = ({route}) => {
  const {value} = route.params;
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputs = useRef<Array<TextInput | null>>([]);
  const navigation = useNavigation();
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const companyId = useSelector(state => state.user.companyId);
  const handleChangeText = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move focus to the next input if a digit is entered
    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    // Move focus to the previous input if backspace is pressed
    if (!text && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };
  console.log('value.....', value);

  const VerifyOTP = data => {
    APIHANDLER('POST', `api/booking/otp/confirmotp/`, data, '').then(values => {
      console.log('`Send Message succesfully succesfully');

      setIsloading(false);
    });
  };
  const handleSubmit = () => {
    const otpCode = otp.join('');
    if (otpCode.length === 6) {
      setIsloading(true);
      VerifyOTP({otp: otpCode, bookingid: value?._id});
      dispatch(
        setUpdateStatus({
          id: value._id,
          body: {bids: [companyId], status: 'COMPLETED', company: companyId},
        }),
      );
      navigation.navigate(strings.home);
      // Alert.alert('OTP Submitted', `Your OTP is ${otpCode}`);
    } else {
      Alert.alert('Invalid OTP', 'Please enter a 6-digit OTP.');
    }
  };
  const SendOTP = () => {
    APIHANDLER('GET', `api/booking/otp/${value?._id}`, null, '').then(
      values => {
        ShowMessage('OTP SEND TO USER EMAIL SUCCESSFULLY');
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <TouchableOpacity
        style={{
          backgroundColor: Colors.primaryColors.yellow,
          alignSelf: 'flex-start',
          marginTop: 20,
          marginLeft: 20,
          borderRadius: 5,
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        {iconMapping.backArrowBlack}
      </TouchableOpacity>
      <View style={{flex: 0.9, marginHorizontal: 20}}>
        <View style={{marginTop: 50, marginBottom: 50}}>
          <Text style={styles?.otpHeading}>OTP Verification</Text>
          <Text style={{color: 'white', fontSize: 18}}>
            {`Enter the verification code sent to the email ${value?.Email}`}
          </Text>
        </View>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={text => handleChangeText(text, index)}
              keyboardType="numeric"
              maxLength={1}
              ref={input => (inputs.current[index] = input)}
            />
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 18}}>
            Didn’t receive code?{' '}
          </Text>
          <TouchableOpacity onPress={SendOTP}>
            <Text style={{color: Colors.primaryColors.yellow, fontSize: 18}}>
              Resend
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.viewAll}
        onPress={() => {
          handleSubmit();
        }}>
        {isLoading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <Text style={styles.textViewAll}>Verify</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OTPScreen;
