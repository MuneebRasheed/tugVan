import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { windowHeight } from '../../utils/dimensions';
import { iconMapping } from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
const PerformanceCard = () => {
  return (
    <View style={styles.earningCardWrapper}>
       <View><Text style={styles.textPrice}>{strings.earningNumber}</Text></View>
        <View style={styles.mainHeading}>{iconMapping.tugVanUparrow}<Text style={styles.textEarning}>{"20% Last Month"}</Text></View>

    
    </View>
  )
}

export default PerformanceCard