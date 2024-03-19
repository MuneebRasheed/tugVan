import { View, Text, TouchableOpacity } from 'react-native'
import React ,{FC}from 'react'
import { styles } from './styles'

import { TaskCardPropsTypes } from './types';
const TaskCard:FC<TaskCardPropsTypes> = ({icon,name,count,onPress}) => {
  return (
    <View style={styles.earningCardWrapper}>

        <View style={styles.mainHeading}><Text style={styles.textEarning}>{name}</Text><TouchableOpacity onPress={()=>onPress()}>{icon}</TouchableOpacity></View>
       <View><Text style={styles.textPrice}>{count}</Text></View>
      <View style={styles.viewAll}><Text style={styles.textViewAll}>View All</Text></View>
    </View>
  )
}

export default TaskCard