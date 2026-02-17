import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClubScreen from '../screens/ClubScreen';
import FeedScreen from '../screens/FeedScreen';
import RoomScreen from '../screens/RoomScreen';
import LoginScreen from '../screens/LoginScreen';
import CommentsScreen from '../screens/CommentsScreen';
import MessageListScreen from '../screens/MessageListScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          borderTopWidth: 1,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
            tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size, color }}>🏠</Text>
            )
        }}
      />
      <Tab.Screen
        name="Club"
        component={ClubScreen}
        options={{
            tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size, color }}>🎉</Text>
            )
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageListScreen}
        options={{
            tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size, color }}>✉️</Text>
            )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
            tabBarIcon: ({ color, size }) => (
                <Text style={{ fontSize: size, color }}>👤</Text>
            )
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Room" component={RoomScreen} options={{ presentation: 'modal', headerShown: false }} />
      <Stack.Screen name="Comments" component={CommentsScreen} options={{ presentation: 'modal', title: 'Comments' }} />
      <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
