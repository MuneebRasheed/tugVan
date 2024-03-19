import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';
import { Colors } from '../../utils/colors';


const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },line:{
    marginTop:20,
    width:"90%",
    marginHorizontal:20,
    height:2,
    backgroundColor:Colors.primaryColors.grey
   },textStyle:{color:Colors.primaryColors.white,fontSize:22,fontWeight:'bold'},
   textFlex:{alignItems:'center',justifyContent:'center',marginVertical:10}
});
