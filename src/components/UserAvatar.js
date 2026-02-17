import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const UserAvatar = ({ avatar, size = 60, isSpeaker }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image
        source={{ uri: avatar }}
        style={[
          styles.image,
          { width: size, height: size, borderRadius: size * 0.4 },
        ]}
      />
      {isSpeaker && (
        <View style={styles.microphoneBadge}>
           {/* Placeholder for mic icon */}
           <View style={{width: 8, height: 8, borderRadius: 4, backgroundColor: 'gray'}} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  image: {
    backgroundColor: '#e0e0e0',
  },
  microphoneBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 2,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});

export default UserAvatar;
