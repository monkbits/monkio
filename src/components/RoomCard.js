import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UserAvatar from './UserAvatar';

const RoomCard = ({ room, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.roomTitle}>{room.title}</Text>

      <View style={styles.contentContainer}>
        <View style={styles.avatarsContainer}>
          {room.speakers.slice(0, 2).map((speaker, index) => (
            <View key={speaker.id} style={[styles.avatarWrapper, { zIndex: 2 - index, marginLeft: index * 15 }]}>
               <UserAvatar avatar={speaker.avatar} size={36} />
            </View>
          ))}
        </View>

        <View style={styles.infoContainer}>
          {room.speakers.map((speaker) => (
             <Text key={speaker.id} style={styles.speakerName}>
               {speaker.name} 💬
             </Text>
          ))}
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>{room.participants} 👤</Text>
            <Text style={styles.statsText}> / </Text>
            <Text style={styles.statsText}>{room.speakers.length} 💬</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  roomTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000',
    lineHeight: 22,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  avatarsContainer: {
    flexDirection: 'row',
    marginRight: 15,
    width: 60,
  },
  avatarWrapper: {
    position: 'absolute',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  speakerName: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  statsText: {
    color: '#888',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default RoomCard;
