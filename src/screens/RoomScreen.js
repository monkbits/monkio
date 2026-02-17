import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import UserAvatar from '../components/UserAvatar';
import { ROOMS } from '../data/dummy';

const RoomScreen = ({ route, navigation }) => {
  const { roomId } = route.params;
  const room = ROOMS.find((r) => r.id === roomId);

  if (!room) {
    return (
      <View style={styles.errorContainer}>
        <Text>Room not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.leaveButton} onPress={() => navigation.goBack()}>
          <Text style={styles.leaveButtonText}>✌️ Leave quietly</Text>
        </TouchableOpacity>
        <Text style={styles.roomTitle} numberOfLines={2}>{room.title}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Speakers</Text>
          <View style={styles.grid}>
            {room.speakers.map((user) => (
              <View key={user.id} style={styles.userContainer}>
                <UserAvatar avatar={user.avatar} size={70} isSpeaker />
                <Text style={styles.userName}>{user.name}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Others in the room</Text>
          <View style={styles.grid}>
            {room.others.map((user) => (
              <View key={user.id} style={styles.userContainer}>
                <UserAvatar avatar={user.avatar} size={50} />
                <Text style={styles.userName}>{user.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>🎤</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>✋</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>➕</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 50,
  },
  leaveButton: {
    position: 'absolute',
    left: 16,
    top: 50,
    padding: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
  },
  leaveButtonText: {
    color: '#d9534f',
    fontWeight: '600',
    fontSize: 12,
  },
  roomTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 40,
    textAlign: 'center',
    maxWidth: '80%',
    lineHeight: 22,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#999',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  userContainer: {
    alignItems: 'center',
    marginBottom: 16,
    width: '33.33%',
  },
  userName: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    paddingBottom: 30, // Extra padding for safe area
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  iconButton: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
  },
});

export default RoomScreen;
