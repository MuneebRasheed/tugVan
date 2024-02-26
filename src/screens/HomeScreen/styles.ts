import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
    
  },
  logo:{
    alignItems:"center",
    marginVertical:25
  },taskWrapper:{
    flexWrap:'wrap',flexDirection:'row',

    
  }
});
