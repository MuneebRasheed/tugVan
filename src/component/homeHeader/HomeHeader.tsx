import {Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {Images} from '../../assets/images';
import {styles} from './styles';
import strings from '../../utils/strings';
import {iconMapping} from '../../assets/icons/iconMap';
import {useSelector} from 'react-redux';
const HomeHeader = () => {
  const Info = useSelector(value => value?.user?.user);

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.profileSection}>
        <View style={styles.profileImage}>
          <Image source={Images.profileImage} />
        </View>
        <View>
          <Text style={styles.subHeading}>{strings.welocome}</Text>
          <Text style={styles.mainHeading}>{Info?.data?.displayName}</Text>
        </View>
      </View>
      <View>{iconMapping.bellIcon}</View>
    </View>
  );
};

export default HomeHeader;
