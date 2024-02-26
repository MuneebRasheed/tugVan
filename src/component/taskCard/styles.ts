import { StyleSheet } from 'react-native'
import {Colors} from '../../utils/colors';
import { windowHeight ,windowWidth} from '../../utils/dimensions';
export const styles = StyleSheet.create({

    earningCardWrapper:{
        backgroundColor:Colors.primaryColors.white,
        height:windowHeight/5,
        marginHorizontal:8,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:10,
        width:windowWidth/2.2,
        marginVertical:10
    },mainHeading:{
        flexDirection:'row',
        justifyContent:'space-around',
        gap:10,
        width:'100%',
        paddingLeft:10,
        paddingRight:3
    }
    ,textEarning:{
        color:Colors.primaryColors.blue,
        fontWeight:'600',
        fontSize:18
    }
    ,textPrice:{
        color:Colors.primaryColors.yellow,
        fontWeight:'800',
        fontSize:40
    },viewAll:{
        backgroundColor:Colors.primaryColors.yellow,
        width:windowWidth/3.3,height:windowHeight/27,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    textViewAll:{
        color:Colors.primaryColors.blue,
        fontWeight:'600',
        fontSize:16
    }
})