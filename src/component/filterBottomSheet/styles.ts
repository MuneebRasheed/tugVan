import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {windowWidth, windowHeight} from '../../utils/dimensions';
import AppConfig from '../../utils/config';
const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
  },

  header: {
    backgroundColor: Colors.primaryColors.yellow,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    gap: 10,
  },
  HeadingText: {
    color: config.primaryColor,
    fontSize: 18,
    fontWeight: '600',
  },
  showResult: {
    borderColor: Colors.primaryColors.yellow,
    backgroundColor: Colors.primaryColors.yellow,
    borderWidth: 2,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10,
    width: '45%',
  },
  text: {color: Colors.primaryColors.black, fontSize: 16},
  reset:{
    borderColor: Colors.primaryColors.black,
    borderWidth: 2,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10,
    width:'45%'
  },flex:{flexWrap: 'wrap', flexDirection: 'row',gap:10}
});
