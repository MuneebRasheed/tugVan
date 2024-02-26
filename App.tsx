

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/navigation/bottomTabNavigation';

function App(): React.JSX.Element {
 

  return (
    <NavigationContainer>
      <BottomNavigation/>
  </NavigationContainer>
  
  );
}



export default App;
