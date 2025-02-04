import React, {useRef} from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Colors} from '../../utils/colors';
import FilterButton from '../filterButton/FilterButton';
import strings from '../../utils/strings';
import {styles} from './styles';

export default function FilterBottomSheet({refRBSheet, setFilter}: any) {
  const Types = [
    {key: 'Tyre Fitter', value: 'TYRE'},
    {key: 'Wrong Fuel', value: 'FUEL'},
    {key: 'Battery Replacment', value: 'Battery_Service'},
    {key: 'Key Lost', value: 'Key_Service'},
    {key: 'DPF Cleaning', value: 'DPF_Cleaning'},
    {key: 'Car Recovery', value: 'RECOVERY'},
    {key: 'Mobile Service', value: 'Mobile_Service'},
    {key: 'Windscreen Service', value: 'Windscreen_Service'},
  ];

  return (
    <View
      style={{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            height: 330,
          },
        }}>
        <View style={{padding: 10}}>
          {/* <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: Colors.primaryColors.black,
              }}>
              LOCATION
            </Text>
            <FilterButton title={'Near Me'} style={{width: 80}} />
            <View
              style={{
                backgroundColor: Colors.primaryColors.grey2,
                height: 2,
                marginVertical: 10,
              }}></View>
          </View> */}
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: Colors.primaryColors.black,
              }}>
              SERVICE TYPE
            </Text>
            <View style={styles.flex}>
              {Types.map((val, index) => (
                <FilterButton
                  title={val?.key}
                  key={index}
                  value={val}
                  setFilter={setFilter}
                />
              ))}
            </View>

            <View
              style={{
                backgroundColor: Colors.primaryColors.grey2,
                height: 2,
                marginVertical: 10,
              }}></View>
          </View>
          <View style={styles.flex}>
            <TouchableOpacity
              style={styles.reset}
              onPress={() => {
                refRBSheet.current.close();
                setFilter([]);
              }}>
              <Text style={styles.text}>RESET</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.showResult}
              onPress={() => refRBSheet.current.close()}>
              <Text style={styles.text}>SHOW RESULT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
}
