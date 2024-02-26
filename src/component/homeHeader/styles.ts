import { StyleSheet } from 'react-native'
import {Colors} from '../../utils/colors';
export const styles = StyleSheet.create({

    profileImage:{
        backgroundColor:Colors.primaryColors.grey,
       width:60,
       height:60,
       borderRadius:30,
       alignItems:'center',
       justifyContent:'center'
    },
    subHeading:{
        color:Colors.primaryColors.grey2
    },
    mainHeading:{
        fontSize:18,
        fontWeight:'bold',
        color:Colors.primaryColors.white,
    
    },profileSection:{
        flexDirection:'row',
        alignItems:'center',
        gap:8
    },headerWrapper:{
        flexDirection:'row',alignItems:'center',justifyContent:'space-between',
        paddingHorizontal:10,paddingVertical:20
    }

})