import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';
import { Colors } from '../../utils/colors';


const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },text:{fontSize:20,fontWeight:'bold',color:Colors.primaryColors.white},
  notFoundContainer:{height:400,alignItems:'center',justifyContent:'center'}
});
