import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useRef } from 'react';
import {Image} from 'react-native';
import {Images} from '../../assets/images';
import {styles} from './styles';
import strings from '../../utils/strings';
import {iconMapping} from '../../assets/icons/iconMap';
import { Colors } from '../../utils/colors';
import FilterBottomSheet from '../filterBottomSheet/FilterBottomSheet';

const SearchInput = () => {
  const refRBSheet = useRef();

  return (
    <View style={styles.headerWrapper}>
     
     <TouchableOpacity   onPress={() => refRBSheet.current.open()}>
     {iconMapping.tugVanFilter}
     </TouchableOpacity>
     
      <TextInput
              placeholder="Search"
              style={styles.textField}
              placeholderTextColor={Colors.primaryColors.grey2}
             
            />
            <FilterBottomSheet  refRBSheet={refRBSheet}/>
     
    </View>
  );
};

export default SearchInput;
