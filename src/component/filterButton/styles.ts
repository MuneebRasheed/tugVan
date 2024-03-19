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

  button: {
    borderColor: Colors.primaryColors.yellow,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical:5,
    paddingHorizontal:5
  },
  buttonText: {fontSize: 16, color: Colors.primaryColors.black},
  backGround: {
    backgroundColor: Colors.primaryColors.yellow,
  },
});
