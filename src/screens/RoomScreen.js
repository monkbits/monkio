import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import UserAvatar from '../components/UserAvatar';
import { ROOMS } from '../data/dummy';
import { Ionicons } from '@expo/vector-icons';

const RoomScreen = ({ route, navigation }) => {
  const { roomId } = route.params;
  const room = ROOMS.find((r) => r.id === roomId) || ROOMS[0]; // Fallback to avoid crash if room not found

  if (!room) {
    return (
      <View style={styles.errorContainer}>
        <Text>Room not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.leaveButton} onPress={() => navigation.goBack()}>
            <Text style={styles.leaveButtonText}>✌️ Leave quietly</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.roomTitle} numberOfLines={2}>{room.title}</Text>

        <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.section}>
            <Text style={styles.sectionTitle}>Speakers</Text>
            <View style={styles.grid}>
                {room.speakers.map((user) => (
                <View key={user.id} style={styles.userContainer}>
                    <UserAvatar avatar={user.avatar} size={80} isSpeaker />
                    <Text style={styles.userName} numberOfLines={1}>{user.name}</Text>
                </View>
                ))}
            </View>
            </View>

            {room.others && (
                <View style={styles.section}>
                <Text style={styles.sectionTitle}>Others in the room</Text>
                <View style={styles.grid}>
                    {room.others.map((user) => (
                    <View key={user.id} style={styles.userContainer}>
                        <UserAvatar avatar={user.avatar} size={60} />
                        <Text style={styles.userName} numberOfLines={1}>{user.name}</Text>
                    </View>
                    ))}
                </View>
                </View>
            )}
        </ScrollView>
      </SafeAreaView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="mic-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="hand-right-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, styles.addBackground]}>
          <Ionicons name="add" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'flex-start',
  },
  leaveButton: {
    backgroundColor: '#F2F2F7',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  leaveButtonText: {
    color: '#FF3B30',
    fontWeight: '600',
    fontSize: 14,
  },
  roomTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 20,
    color: '#000',
    lineHeight: 28,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8E8E93',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  userContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '33.33%',
    paddingHorizontal: 4,
  },
  userName: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    color: '#1C1C1E',
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
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 34,
    borderTopWidth: 0.5,
    borderTopColor: '#C6C6C8',
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBackground: {
      backgroundColor: '#E5E5EA',
  }
});

export default RoomScreen;
