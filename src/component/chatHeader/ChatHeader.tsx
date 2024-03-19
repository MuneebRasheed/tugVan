import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {Images} from '../../assets/images';
import {styles} from './styles';
import strings from '../../utils/strings';
import {iconMapping} from '../../assets/icons/iconMap';
import { Colors } from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const ChatHeader = ({title}) => {
  const navigation = useNavigation();
  return (
   
     
     <TouchableOpacity style={styles.header} onPress={()=>navigation.goBack()}>
        {iconMapping.tugVanLeftArrow}
        <Text style={styles.HeadingText}>{title}</Text>
      </TouchableOpacity>
     

  );
};

export default ChatHeader;
