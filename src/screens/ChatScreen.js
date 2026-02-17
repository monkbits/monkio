import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { CURRENT_USER } from '../data/dummy';

const ChatScreen = ({ route, navigation }) => {
  const { user } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello! How are you doing today?',
        createdAt: new Date(),
        user: {
          _id: user.id,
          name: user.name,
          avatar: user.avatar,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
             <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{user.name}</Text>
        <View style={{width: 40}} />
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: CURRENT_USER.id,
          name: CURRENT_USER.name,
          avatar: CURRENT_USER.avatar,
        }}
        showUserAvatar
        alwaysShowSend
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      backgroundColor: '#f9f9f9',
  },
  headerTitle: {
      fontSize: 16,
      fontWeight: '600',
  },
  backButton: {
      padding: 8,
  },
  backButtonText: {
      color: '#007AFF',
      fontSize: 16,
  },
});

export default ChatScreen;
