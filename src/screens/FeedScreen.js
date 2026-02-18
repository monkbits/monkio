import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, Text } from 'react-native';
import FeedCard from '../components/FeedCard';
import { FEED_ITEMS } from '../data/dummy';

const FeedScreen = () => {
  const renderItem = ({ item }) => (
    <FeedCard item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feed</Text>
      </View>
      <FlatList
        data={FEED_ITEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
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
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#000',
    letterSpacing: -0.5,
  },
  listContent: {
    padding: 16,
    paddingTop: 5,
  },
});

export default FeedScreen;
