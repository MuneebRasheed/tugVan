import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {Images} from '../../assets/images';
import {styles} from './styles';
import strings from '../../utils/strings';
import {iconMapping} from '../../assets/icons/iconMap';
import {Colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const FilterButton = ({title, style = {}}) => {
  const [selected, setSelected] = useState(false);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.button, selected ? styles.backGround : {}, style]} onPress={()=>setSelected(pre=>!pre)}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
