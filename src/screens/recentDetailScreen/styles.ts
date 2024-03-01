import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';
import {Colors} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/dimensions';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },
  mapStyle: {
    marginTop:windowHeight / 17,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: windowHeight / 3,
  },
  secondHalf: {
    marginTop: windowHeight / 3,
    height: '100%',
    backgroundColor: Colors.primaryColors.white,
    padding: 10,
    gap: 15,
  },
  textStyle: {
    fontSize: 14,
    color: Colors.primaryColors.grey2,
  },
  simpleRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  line: {
    marginTop: 5,
    backgroundColor: Colors.primaryColors.grey2,
    height: 1,
    marginLeft: 25,
  },
  detail: {
    paddingLeft: 50,
    marginTop: 10,
    gap: 10,
  },
  textFieldWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: config.primaryColor,
    gap: 20,
    paddingLeft: 20,
    width: windowWidth / 1.5,
    borderRadius: 10,
    marginTop:20
  },
  textField: {
    width: windowWidth / 1.9,
    borderColor: Colors.primaryColors.white,
    borderLeftWidth: 1,
    color: 'white',
    paddingHorizontal: 10,
  },viewAll:{
    backgroundColor:Colors.primaryColors.yellow,
   height:windowHeight/18,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
},
textViewAll:{
    color:Colors.primaryColors.blue,
    fontWeight:'800',
    fontSize:16
},header:{backgroundColor:config.primaryColor,height:50,alignItems:'center',flexDirection:'row',paddingLeft:10,gap:10},HeadingText:{
  color:Colors.primaryColors.white,
  fontSize:18,fontWeight:'600'
}
});
