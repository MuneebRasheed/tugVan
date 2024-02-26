import { View, Text } from 'react-native'
import React ,{FC}from 'react'
import { styles } from './styles'
import { windowHeight,windowWidth } from '../../utils/dimensions';
import { iconMapping } from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import { TaskCardPropsTypes } from './types';
const TaskCard:FC<TaskCardPropsTypes> = ({icon,name,count}) => {
  return (
    <View style={styles.earningCardWrapper}>

        <View style={styles.mainHeading}><Text style={styles.textEarning}>{name}</Text><View>{icon}</View></View>
       <View><Text style={styles.textPrice}>{count}</Text></View>
      <View style={styles.viewAll}><Text style={styles.textViewAll}>View All</Text></View>
    </View>
  )
}

export default TaskCard