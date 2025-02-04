import {
  ActivityIndicator,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {MessageScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import ChatHeader from '../../component/chatHeader/ChatHeader';
import strings from '../../utils/strings';
import {messageData} from '../../utils/dummyData';
import {chatSocket} from '../../utils/socketService';
import {APIHANDLER} from '../../services/apiConfig';
import {iconMapping} from '../../assets/icons/iconMap';
import moment from 'moment';
const MessageScreen: FC<MessageScreenPropsTypes> = ({route, navigation}) => {
  const [messageText, setMessageText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const {bookingId, value} = route.params;
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
          {moment(message.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
        </Text>
      </View>
    );
  };
  const [messages, setMessages] = useState([]);

  const listenNewmessage = () => {
    chatSocket.on('servermsgClient', messageData => {
      setMessages(prevMessages => [...prevMessages, messageData]);
    });
  };

  useEffect(() => {
    setLoading(true);
    chatSocket.emit('joinRoom', {bookingId});
    listenNewmessage();
    GetMessage();
  }, []);
  const GetMessage = () => {
    APIHANDLER('GET', `api/v2/chat/getadminmsg/${bookingId}`, null, '').then(
      value => {
        console.log('value?.data', JSON.stringify(value));
        setLoading(false);
        if (value?.data?.length > 0) setMessages(value?.data);
      },
    );
  };

  const sendMessage = () => {
    if (messageText.trim()) {
      const currentDateAndTime = new Date();
      let messageData = {
        text: messageText,
        sender: 'C-ADMIN',
        receiver: 'USER',
        bookingID: bookingId,
        createdAt: currentDateAndTime,
      };
      SendMessages(messageData);
      //  chatService.sendtugvanMessage(messageData).then(res => {
      //    setLoadingStates(prevLoadingStates => ({
      //      ...prevLoadingStates,
      //      [currentDateAndTime]: false,
      //    }));
      //  });
    }
  };

  const SendMessages = data => {
    APIHANDLER('POST', `api/v2/chat/adminMsg/`, data, '').then(value => {
      console.log('`Send Message succesfully succesfully');
      // GetMessage();
    });
    setMessages(prevMessages => [...prevMessages, data]);
    console.log(`message has been send to client ${data?.text}`);
    setMessageText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />
        <ChatHeader title={`Client ( ${value?.type} )`} />
        {!isLoading ? (
          <ScrollView style={styles.messageList}>
            {messages?.length > 0 ? (
              messages?.map((val, ind) => (
                <ChatMessage
                  key={ind}
                  message={val}
                  isSender={val?.sender == 'C-ADMIN'}
                />
              ))
            ) : (
              <View
                style={{
                  height: 700,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 18}}>
                  No Messages Found
                </Text>
              </View>
            )}
          </ScrollView>
        ) : (
          <View
            style={{
              height: '90%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator color={'white'} size={25} />
          </View>
        )}
        {/* <View style={styles.line}></View> */}
        {/* <View style={styles.center}>
        <Text style={styles.preDefineText}>{strings.templete}</Text>
      </View> */}

        {/* <ScrollView style={styles.customButtonWrapper} horizontal={true}>
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
      </ScrollView> */}
      </KeyboardAvoidingView>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          value={messageText}
          onChangeText={setMessageText}
          placeholder="Type your message"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          {iconMapping.sendmark}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;
