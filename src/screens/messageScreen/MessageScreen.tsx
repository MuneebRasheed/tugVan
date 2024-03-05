import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React, {FC} from 'react';
import {MessageScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import ChatHeader from '../../component/chatHeader/ChatHeader';
import strings from '../../utils/strings';
import { messageData } from '../../utils/dummyData';
const MessageScreen: FC<MessageScreenPropsTypes> = () => {
  const ChatMessage = ({message, isSender}) => {
    return (
      <View
        style={[
          styles.message,
          isSender ? styles.senderMessage : styles.receiverMessage,
        ]}>
        <Text style={[isSender ? styles.senderText : styles.receiverText]}>
          {message.text}
        </Text>
        <Text
          style={[isSender ? styles.sendeMmessageTime : styles.messageTime]}>
          {message.time}
        </Text>
      </View>
    );
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <ChatHeader />
      <View style={styles.messageList}>
      {messageData?.map((val, ind) => (
          <ChatMessage key={ind} message={val} isSender={val?.sender} />
        ))}
      </View>
      <View style={styles.line}></View>
      <View style={styles.center}>
        <Text style={styles.preDefineText}>{strings.templete}</Text>
      </View>
      
     
      <ScrollView style={styles.customButtonWrapper} horizontal={true} >
        <View style={styles.button}>
          <Text style={styles.btnText}>On my way</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.btnText}>I have Reached</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.btnText}>On my way</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.btnText}>On my way</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.btnText}>I have Reached</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.btnText}>On my way</Text>
        </View>
      </ScrollView>
   
    </SafeAreaView>
  );
};

export default MessageScreen;
