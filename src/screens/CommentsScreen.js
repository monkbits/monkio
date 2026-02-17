import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { FEED_COMMENTS, CURRENT_USER } from '../data/dummy';

const CommentsScreen = ({ route }) => {
  const { feedId } = route.params;
  const [comments, setComments] = useState(FEED_COMMENTS[feedId] || []);
  const [newComment, setNewComment] = useState('');

  const handleSend = () => {
    if (newComment.trim().length === 0) return;

    const comment = {
      id: `c${Date.now()}`,
      user: CURRENT_USER,
      text: newComment,
      time: 'Just now',
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <View style={styles.header}>
            <Text style={styles.username}>{item.user.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.commentText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
          <Text style={styles.headerTitle}>Comments</Text>
      </View>
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No comments yet. Be the first!</Text>}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={styles.inputWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendText}>Post</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerBar: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      alignItems: 'center',
  },
  headerTitle: {
      fontSize: 16,
      fontWeight: '600',
  },
  listContent: {
    padding: 16,
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12,
  },
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 4,
  },
  username: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
  },
  time: {
      fontSize: 12,
      color: '#888',
  },
  commentText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  emptyText: {
      textAlign: 'center',
      marginTop: 20,
      color: '#888',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    maxHeight: 100,
  },
  sendButton: {
    paddingHorizontal: 10,
  },
  sendText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});

export default CommentsScreen;
