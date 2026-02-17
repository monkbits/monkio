import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, Text } from 'react-native';
import FeedCard from '../components/FeedCard';
import { FEED_ITEMS } from '../data/dummy';

const FeedScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <FeedCard
      item={item}
      onCommentPress={() => navigation.navigate('Comments', { feedId: item.id })}
    />
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
    backgroundColor: '#F9F9F9',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  listContent: {
    padding: 16,
  },
});

export default FeedScreen;
