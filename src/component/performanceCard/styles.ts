import { StyleSheet } from 'react-native'
import {Colors} from '../../utils/colors';
import { windowHeight } from '../../utils/dimensions';
export const styles = StyleSheet.create({

    earningCardWrapper:{
        
        backgroundColor:Colors.primaryColors.white,
        height:windowHeight/7,
        marginHorizontal:15,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:10
    },mainHeading:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:10
    }
    ,textEarning:{
        color:Colors.primaryColors.blue,
        fontWeight:'600',
        fontSize:20
    }
    ,textPrice:{
        color:Colors.primaryColors.yellow,
        fontWeight:'800',
        fontSize:40
    }
})