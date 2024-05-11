

import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/navigation/bottomTabNavigation';

import { Provider } from 'react-redux';
import store from './src/redux';
import { APIHANDLER } from './src/services/apiConfig';


function App(): React.JSX.Element {


  


  return (
    <Provider store={store}>
    <NavigationContainer>
      <BottomNavigation/>
  </NavigationContainer>
  </Provider>
  
  );
}



export default App;
