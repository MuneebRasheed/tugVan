import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';

function ModalToolTip({isModalVisible,setModalVisible}) {
 // Set initial state to false

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}

      <Modal
        isVisible={isModalVisible}
        swipeDirection={['up', 'left', 'right', 'down']}
        backdropColor="transparent" // Set backdrop color to transparent
        backdropOpacity={0.5} // Set backdrop opacity (adjust as needed)
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
        }}
        onSwipeComplete={()=>setModalVisible(false)}
      >
        <View style={{ backgroundColor: 'white', width: 300, height: 300, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default ModalToolTip;
