import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FeedCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: item.author.avatar }} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.authorName}>{item.author.name}</Text>
          <Text style={styles.time}>{item.time} • {item.topic}</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
            <Ionicons name="ellipsis-horizontal" size={20} color="#999" />
        </TouchableOpacity>
      </View>

      <Text style={styles.content}>{item.content}</Text>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart-outline" size={22} color="#333" />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={20} color="#333" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-social-outline" size={20} color="#333" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginHorizontal: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    flex: 1,
    justifyContent: 'center',
  },
  authorName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  moreButton: {
      padding: 5,
  },
  content: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
  },
  actionButton: {
    marginRight: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    marginLeft: 6,
  },
});

export default FeedCard;
