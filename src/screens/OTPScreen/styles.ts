import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';

const config = AppConfig();

import {Colors} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: config.primaryColor,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderColor: Colors.primaryColors.lightGrey,
    borderWidth: 2,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  otpHeading: {
    fontSize: 28,
    color: Colors.primaryColors.yellow,
    fontWeight: 'bold',
  },
  viewAll: {
    backgroundColor: Colors.primaryColors.yellow,
    width: windowWidth / 1.1,
    height: windowHeight / 23,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textViewAll: {
    color: Colors.primaryColors.blue,
    fontWeight: '600',
    fontSize: 16,
  },
});
