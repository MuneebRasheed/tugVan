import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import FilterBottomSheet from '../filterBottomSheet/FilterBottomSheet';
import {iconMapping} from '../../assets/icons/iconMap';

const SearchInput = ({value, setValue, copyData}) => {
  const refRBSheet = useRef();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);
  console.log('filter.....', filter);
  console.log('val?.type.....', copyData[0]?.type);
  console.log('search.....', search);

  const onfilter = () => {
    if (search == '' && filter?.length > 0) {
      setValue(copyData);
    } else {
      setValue(
        copyData?.filter(
          val =>
            val?.type?.toLowerCase()?.includes(search?.toLowerCase()) ||
            filter?.includes(val?.type),
        ),
      );
    }
  };
  useEffect(() => {
    onfilter();
  }, [search, filter?.length]);

  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        {iconMapping.tugVanFilter}
      </TouchableOpacity>

      <TextInput
        placeholder="Search"
        style={styles.textField}
        placeholderTextColor={Colors.primaryColors.grey2}
        onChangeText={val => {
          setSearch(val);
        }}
        value={search}
      />
      <FilterBottomSheet refRBSheet={refRBSheet} setFilter={setFilter} />
    </View>
  );
};

export default SearchInput;
