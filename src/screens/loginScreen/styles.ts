import {StyleSheet} from 'react-native';
import AppConfig from '../../utils/config';
import {Colors} from '../../utils/colors';

const config = AppConfig();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.primaryColor,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 16,
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    backgroundColor: Colors.primaryColors.white,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
  logo: {
    alignItems: 'center',
    marginVertical: 25,
  },
  button: {
    backgroundColor: Colors.primaryColors.yellow,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primaryColors.black,
  },
});
