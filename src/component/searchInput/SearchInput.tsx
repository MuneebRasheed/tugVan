import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {Images} from '../../assets/images';
import {styles} from './styles';
import strings from '../../utils/strings';
import {iconMapping} from '../../assets/icons/iconMap';
import { Colors } from '../../utils/colors';

const SearchInput = () => {
  return (
    <View style={styles.headerWrapper}>
     
     
      {iconMapping.tugVanFilter}
      <TextInput
              placeholder="Search"
              style={styles.textField}
              placeholderTextColor={Colors.primaryColors.grey2}
             
            />
     
    </View>
  );
};

export default SearchInput;
