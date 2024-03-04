import { StyleSheet } from 'react-native'
import {Colors} from '../../utils/colors';
import { windowWidth } from '../../utils/dimensions';
export const styles = StyleSheet.create({

headerWrapper:{
        flexDirection:'row',alignItems:'center',justifyContent:'flex-end',gap:10,
        paddingHorizontal:10,paddingTop:20,
        paddingBottom:10
    },textField: {
        width: windowWidth / 1.5,
        borderColor: Colors.primaryColors.white,
        borderLeftWidth: 1,
        color: Colors.primaryColors.grey2,
        paddingHorizontal: 20,
        backgroundColor:'white',
        borderRadius:20.
        
      }

})