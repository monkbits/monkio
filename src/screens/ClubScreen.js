import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import RoomCard from '../components/RoomCard';
import { ROOMS } from '../data/dummy';
import { Ionicons } from '@expo/vector-icons';

const ClubScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <RoomCard room={item} onPress={() => navigation.navigate('Room', { roomId: item.id })} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Morning,</Text>
        <Text style={styles.username}>User 👋</Text>
      </View>

      <FlatList
        data={ROOMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.startButton} onPress={() => {}}>
        <Ionicons name="add" size={24} color="white" style={{ marginRight: 8 }} />
        <Text style={styles.startButtonText}>Start a room</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F7F7F7',
    marginBottom: 5,
  },
  greeting: {
    fontSize: 14,
    color: '#888',
    fontWeight: '600',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  username: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
  },
  listContent: {
    padding: 16,
    paddingBottom: 100,
  },
  startButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ClubScreen;
