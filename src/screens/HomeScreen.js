import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import RoomCard from '../components/RoomCard';
import { ROOMS } from '../data/dummy';

const HomeScreen = ({ navigation }) => {
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
        <Text style={styles.startButtonText}>+ Start a room</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F0E4', // Clubhouse-like background color
  },
  header: {
    padding: 20,
    marginTop: 10,
  },
  greeting: {
    fontSize: 20,
    color: '#555',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  listContent: {
    padding: 20,
    paddingBottom: 100, // Space for the floating button
  },
  startButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
