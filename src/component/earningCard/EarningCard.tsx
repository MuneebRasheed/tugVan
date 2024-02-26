import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { windowHeight } from '../../utils/dimensions';
import { iconMapping } from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
const EarningCard = () => {
  return (
    <View style={styles.earningCardWrapper}>

        <View style={styles.mainHeading}>{iconMapping.wallet}<Text style={styles.textEarning}>{strings?.earning}</Text></View>
       <View><Text style={styles.textPrice}>{strings.earningNumber}</Text></View>
    
    </View>
  )
}

export default EarningCard