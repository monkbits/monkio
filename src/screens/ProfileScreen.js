import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { CURRENT_USER } from '../data/dummy';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
            <Image source={{ uri: CURRENT_USER.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{CURRENT_USER.name}</Text>
            <Text style={styles.username}>{CURRENT_USER.username}</Text>
        </View>

        <View style={styles.statsContainer}>
            <View style={styles.statItem}>
                <Text style={styles.statNumber}>{CURRENT_USER.followers}</Text>
                <Text style={styles.statLabel}>followers</Text>
            </View>
            <View style={styles.statItem}>
                <Text style={styles.statNumber}>{CURRENT_USER.following}</Text>
                <Text style={styles.statLabel}>following</Text>
            </View>
        </View>

        <View style={styles.bioContainer}>
            <Text style={styles.bio}>{CURRENT_USER.bio}</Text>
        </View>

        <View style={styles.actions}>
            <TouchableOpacity style={styles.button}>
                <Ionicons name="pencil-outline" size={20} color="#333" style={{ marginRight: 6 }} />
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.settingsButton]}>
                <Ionicons name="settings-outline" size={20} color="#333" />
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
      alignItems: 'center',
      padding: 20,
  },
  header: {
      alignItems: 'center',
      marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 40,
    marginBottom: 15,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  statItem: {
      alignItems: 'center',
      marginHorizontal: 20,
  },
  statNumber: {
      fontSize: 18,
      fontWeight: '600',
      color: '#000',
  },
  statLabel: {
      fontSize: 14,
      color: '#666',
  },
  bioContainer: {
      marginBottom: 30,
      paddingHorizontal: 20,
  },
  bio: {
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 24,
      color: '#333',
  },
  actions: {
      flexDirection: 'row',
  },
  button: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderWidth: 1,
      borderColor: '#eee',
      borderRadius: 24,
      marginHorizontal: 6,
      backgroundColor: '#f9f9f9',
  },
  settingsButton: {
      paddingHorizontal: 15,
  },
  buttonText: {
      fontSize: 15,
      fontWeight: '600',
      color: '#333',
  },
});

export default ProfileScreen;
