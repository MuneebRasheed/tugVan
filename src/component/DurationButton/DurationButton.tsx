import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import { iconMapping } from '../../assets/icons/iconMap';
import {Colors} from '../../utils/colors';
import strings from '../../utils/strings';
import {styles} from './styles';
// import {useDispatch} from 'react-redux';
// import {setCircleChartDuration} from '../../Redux/toolkit/DurationSlicer';

const DurationButtons = ({setBool}) => {
  const scrollRef: any = useRef();
  // const dispatch: any = useDispatch();
  const [selectDuration, setSelectDuration] = useState<any>(0);

  useEffect(() => {
    // dispatch(setCircleChartDuration(selectDuration));
  }, [selectDuration]);

  const incrementFunction = () => {
    if (selectDuration < 3) {
      scrollRef.current?.scrollTo({x: 0, animated: true});
      setSelectDuration(selectDuration + 1);
    } else {
      setSelectDuration(0);
      scrollRef.current?.scrollTo({x: 0, animated: true});
    }
    if (selectDuration === 2) {
      scrollRef.current?.scrollTo({x: 110, animated: true});
    }
    if (selectDuration === 1) {
      scrollRef.current?.scrollTo({x: 25, animated: true});
    }
    setBool()
  };
  const decrementFunction = () => {
    if (selectDuration === 0) {
      scrollRef.current?.scrollTo({x: 110, animated: true});
      setSelectDuration(3);
    } else {
      setSelectDuration(selectDuration - 1);
    }
    if (selectDuration === 1) {
      scrollRef.current?.scrollTo({x: 0, animated: true});
    }
    if (selectDuration === 2) {
      scrollRef.current?.scrollTo({x: 25, animated: true});
    }
    setBool()
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          decrementFunction();
        }}>
        {iconMapping.leftArrow}
      </TouchableOpacity>
      <ScrollView
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{}}>
        <TouchableOpacity
          onPress={() => {
            setSelectDuration(0),
              scrollRef.current?.scrollTo({x: 3, animated: true});
          }}
          style={[
            styles.weekContainer,
            {
              backgroundColor:
                selectDuration === 0
                  ? Colors.primaryColors.black
                  : Colors.primaryColors.white,
            },
          ]}>
          <Text
            style={[
              styles.text,
              {
                color:
                  selectDuration === 0
                    ? Colors.primaryColors.white
                    : Colors.primaryColors.black,
              },
            ]}>
            {"Daily"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectDuration(1),
              scrollRef.current?.scrollTo({x: 25, animated: true});
          }}
          style={[
            styles.weekContainer,
            {
              backgroundColor:
                selectDuration === 1
                  ? Colors.primaryColors.black
                  : Colors.primaryColors.white,
            },
          ]}>
          <Text
            style={[
              styles.text,
              {
                color:
                  selectDuration === 1
                    ? Colors.primaryColors.white
                    : Colors.primaryColors.black,
              },
            ]}>
            {"Weekly"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectDuration(2),
              scrollRef.current?.scrollTo({x: 25, animated: true});
          }}
          style={[
            styles.weekContainer,
            {
              backgroundColor:
                selectDuration === 2
                  ? Colors.primaryColors.black
                  : Colors.primaryColors.white,
            },
          ]}>
          <Text
            style={[
              styles.text,
              {
                color:
                  selectDuration === 2
                    ? Colors.primaryColors.white
                    : Colors.primaryColors.black,
              },
            ]}>
            {"Monthly"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectDuration(3)}
          style={[
            styles.weekContainer,
            {
              backgroundColor:
                selectDuration === 3
                  ? Colors.primaryColors.black
                  : Colors.primaryColors.white,
            },
          ]}>
          <Text
            style={[
              styles.text,
              {
                color:
                  selectDuration === 3
                    ? Colors.primaryColors.white
                    : Colors.primaryColors.black,
              },
            ]}>
            {"Yearly"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          incrementFunction();
        }}>
        {iconMapping.rightArrowSecondary}
      </TouchableOpacity>
    </View>
  );
};

export default DurationButtons;
