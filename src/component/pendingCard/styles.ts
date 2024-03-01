import { StyleSheet } from 'react-native'
import {Colors} from '../../utils/colors';
import { windowHeight ,windowWidth} from '../../utils/dimensions';
import AppConfig from '../../utils/config';
const config = AppConfig()
export const styles = StyleSheet.create({

    earningCardWrapper:{
        flexDirection:'row',
        backgroundColor:Colors.primaryColors.white,
        height:windowHeight/9,
        marginHorizontal:8,
        borderRadius:10,
        marginVertical:10
    }
    
    ,textPrice:{
        color:Colors.primaryColors.blue,
        fontWeight:'800',
        fontSize:20
    },
    textViewAll:{
        color:Colors.primaryColors.grey2,
        fontWeight:'400',
        fontSize:12
    }, textPayment:{
        color:config.primaryColor,
        fontWeight:'800',
        fontSize:12
    }

    ,leftHalf:{
        backgroundColor:Colors.primaryColors.yellow,
        width:windowWidth/4.3,
        height:'100%',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
        ,alignItems:'center',justifyContent:'center'
    },
    rightHalf:{
      justifyContent:'space-around',
      marginVertical:2,
      marginHorizontal:5
    },firstRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:"86%",
        alignItems:'center'
    },secondRow:{
        flexDirection:'row',
        alignItems:'center',
      justifyContent:'space-between',marginRight:45
    },
    directionRow:{
        flexDirection:'row',gap:3,alignItems:'center'
    },
    line:{
     width:"86%",
     height:2,
     backgroundColor:Colors.primaryColors.grey
    }
})