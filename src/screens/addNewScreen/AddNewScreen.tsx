import {SafeAreaView, StatusBar} from 'react-native';
import React, {FC} from 'react';
import {AddNewScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';

const AddNewScreen: FC<AddNewScreenPropsTypes> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
    </SafeAreaView>
  );
};

export default AddNewScreen;
