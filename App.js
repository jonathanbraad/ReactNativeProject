import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import RegisterScreen from './Screens/RegisterScreen';
import PlanningScreen from './Screens/PlanningScreen';

// Firebase imports (Removed the old firebase imports)
import { firebase } from '@react-native-firebase/app'; // Ensure correct import
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAVM0k1pj1-zIP2mCuVgXjLLfS5SlkCbbE",
  authDomain: "nutrifit-d6ea0.firebaseapp.com",
  projectId: "nutrifit-d6ea0",
  storageBucket: "nutrifit-d6ea0.appspot.com",
  messagingSenderId: "693598253099",
  appId: "1:693598253099:web:594a3615bcce54440e3a6e",
  measurementId: "G-3J55H9JTY8"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Planning" component={PlanningScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
