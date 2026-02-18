import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import App from './App';
import { expo } from './app.json';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// Explicitly register the app name from app.json as well, just in case
AppRegistry.registerComponent(expo.name, () => App);
AppRegistry.registerComponent('main', () => App);
