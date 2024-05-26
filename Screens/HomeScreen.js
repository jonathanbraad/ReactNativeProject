import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const HomeScreen = ({ navigation }) => {
  return (
<View style={styles.mainContainer}>
      <Header
        onLogin={() => navigation.navigate('Login')} // Define the navigation action for the login button
        onCreateAccount={() => navigation.navigate('Register')} // Define the navigation action for the create account button
      />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome!</Text>
      </View>
      <Footer
        onHome={() => navigation.navigate('Home')} // Define the navigation action for the home button
        onPlanning={() => navigation.navigate('Planning')} // Define the navigation action for the planning button
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, // Ensures the container fills the whole screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background color
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center', // Center align text
  },
});

export default HomeScreen;