import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RoomScreen from '../screens/RoomScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Room" component={RoomScreen} options={{ presentation: 'modal', headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
