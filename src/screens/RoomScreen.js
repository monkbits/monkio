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
        <Text style={styles.roomTitle}>{room.title}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Speakers</Text>
          <View style={styles.grid}>
            {room.speakers.map((user) => (
              <View key={user.id} style={styles.userContainer}>
                <UserAvatar avatar={user.avatar} size={80} isSpeaker />
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
                <UserAvatar avatar={user.avatar} size={60} />
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
    backgroundColor: '#F2F0E4',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#F2F0E4',
    alignItems: 'center',
  },
  leaveButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 20,
  },
  leaveButtonText: {
    color: '#d9534f',
    fontWeight: 'bold',
  },
  roomTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777',
    marginBottom: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Changed to space-around for better distribution
  },
  userContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '30%',
  },
  userName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
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
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  iconButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
  },
  iconText: {
    fontSize: 24,
  },
});

export default RoomScreen;
