import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const HomeScreen = ({ navigation }) => {
  return (
<View style={styles.container}>
      <Header
        onLogin={() => navigation.navigate('Login')} // Define the navigation action for the login button
        onCreateAccount={() => navigation.navigate('CreateAccount')} // Define the navigation action for the create account button
      />
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to the Home Page!</Text>
        <Button title="Go Back to Login" onPress={() => navigation.replace('Login')} />
      </View>
      <Footer
        onHome={() => navigation.navigate('Home')} // Define the navigation action for the home button
        onPlanning={() => navigation.navigate('Planning')} // Define the navigation action for the planning button
      />
    </View>
  );
};

const styles = StyleSheet.create({
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