import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const PlanningScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcom111e!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10
  }
});

export default PlanningScreen;
