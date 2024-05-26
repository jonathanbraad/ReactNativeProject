import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const PlanningScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header
        onLogin={() => navigation.navigate('Login')} // Define the navigation action for the login button
        onCreateAccount={() => navigation.navigate('Register')} // Define the navigation action for the create account button
      />
      
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Premade programs</Text>

        <View style={styles.programsContainer}>
          <View style={styles.programType}>
            <Text style={styles.programTypeTitle}>Diet programs</Text>
            <Text style={styles.programSelected}>Diet plan 1 - Selected</Text>
            <Text>Diet plan 2</Text>
            <Text>Diet plan 3</Text>
            <Text>Diet plan 4</Text>
            <Button title="Create new diet program" onPress={() => {}} />
          </View>
          <View style={styles.programType}>
            <Text style={styles.programTypeTitle}>Workout programs</Text>
            <Text style={styles.programSelected}>Workout plan 1 - Selected</Text>
            <Text>Workout plan 2</Text>
            <Button title="Create new workout program" onPress={() => {}} />
          </View>
        </View>

        <Button title="Log workout" onPress={() => {}} style={styles.logWorkoutButton} />
      </View>

      <Footer
        onHome={() => navigation.navigate('Home')} // Define the navigation action for the home button
        onPlanning={() => navigation.navigate('Planning')} // Define the navigation action for the planning button
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  sectionContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  programsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  programType: {
    flex: 1,
    margin: 5,
  },
  programTypeTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  programSelected: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  logWorkoutButton: {
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  }
});

export default PlanningScreen;
