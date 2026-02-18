import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UserAvatar from './UserAvatar';
import { Ionicons } from '@expo/vector-icons';

const RoomCard = ({ room, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.roomTitle}>{room.title}</Text>

      <View style={styles.contentContainer}>
        <View style={styles.avatarsContainer}>
          {room.speakers.slice(0, 2).map((speaker, index) => (
            <View key={speaker.id} style={[styles.avatarWrapper, { zIndex: 2 - index, marginLeft: index * 20 }]}>
               <UserAvatar avatar={speaker.avatar} size={40} />
            </View>
          ))}
        </View>

        <View style={styles.infoContainer}>
          {room.speakers.map((speaker) => (
             <View key={speaker.id} style={styles.speakerRow}>
               <Text style={styles.speakerName} numberOfLines={1}>
                 {speaker.name}
               </Text>
               <Ionicons name="mic-outline" size={14} color="#888" style={{marginLeft: 4}}/>
             </View>
          ))}
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>{room.participants}</Text>
            <Ionicons name="person" size={12} color="#888" style={{marginLeft: 2, marginRight: 8}}/>
            <Text style={styles.statsText}>{room.speakers.length}</Text>
            <Ionicons name="mic" size={12} color="#888" style={{marginLeft: 2}}/>
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
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginHorizontal: 4,
  },
  roomTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#000',
    lineHeight: 24,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  avatarsContainer: {
    flexDirection: 'row',
    marginRight: 16,
    width: 60,
  },
  avatarWrapper: {
    position: 'absolute',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  speakerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 6,
  },
  speakerName: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  statsText: {
    color: '#888',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default RoomCard;
