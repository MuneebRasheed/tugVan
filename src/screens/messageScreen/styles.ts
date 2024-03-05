import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';
import {Colors} from '../../utils/colors';
import { windowHeight } from '../../utils/dimensions';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  line: {
    marginTop: 10,
    height: 1,
    backgroundColor: Colors.primaryColors.yellow,
  },
  preDefineText: {
    color: Colors.primaryColors.grey2,
    fontSize: 16,
  },
  center: {marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Colors.primaryColors.white,
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.primaryColors.yellow,
   
    alignItems:'center',justifyContent:'center',height:30,borderRadius:10,
    paddingHorizontal:10,
    marginHorizontal:10
  },customButtonWrapper:{
  marginVertical:10,
   flexDirection:'row'
  },messageList:{
    height:windowHeight/1.47,
  margin:10
  
   
  }, message: {
    maxWidth: '70%',
    padding: 8,
    marginBottom: 8,
  },
  senderMessage: {

    alignSelf: 'flex-end',
    backgroundColor: Colors.primaryColors.yellow,
    borderRadius: 8,
    borderBottomEndRadius: 0,
    
  },
  senderText: {
    color: Colors.primaryColors.black,
  },
  receiverText: {
    color: Colors.primaryColors.black,
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.primaryColors.yellow,
    borderRadius: 8,
    borderBottomLeftRadius: 0,
  },
  messageTime: {
    fontSize: 10,
    color: Colors.primaryColors.white,
    marginTop: 5,
  },sendeMmessageTime: {
    fontSize: 10,
    color: Colors.primaryColors.white,
    marginTop: 5,
  },
});
