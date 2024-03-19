

import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/navigation/bottomTabNavigation';
import {socketServcies,socketBiding,socketBooking} from './src/utils/socketService';


function App(): React.JSX.Element {
 
  useEffect(()=>{
    socketServcies.initializeSocket()
    socketBiding.on('connect', () => {
     
      console.log('Socket.IO connection established at /v2/biding');
    });
    socketBooking.on('connect', () => {
     
      console.log('Socket.IO connection established at /v2/booking');
    });
    listenNewBooking()
  },[])
  const listenNewBooking=()=>{
   



  
}
  return (
    <NavigationContainer>
      <BottomNavigation/>
  </NavigationContainer>
  
  );
}



export default App;
