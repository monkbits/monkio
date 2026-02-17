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
               <UserAvatar avatar={speaker.avatar} size={40} />
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
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  roomTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
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
    fontSize: 16,
    marginBottom: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  statsText: {
    color: 'gray',
    fontSize: 14,
  },
});

export default RoomCard;
