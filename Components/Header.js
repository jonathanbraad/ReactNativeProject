import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Header = ({ onLogin, onCreateAccount }) => {
  return (
    <View style={styles.headerContainer}>
      <Button title="Log in" onPress={onLogin} />
      <Button title="Create account" onPress={onCreateAccount} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,  // Increased padding for better touch targets
    paddingHorizontal: 20,  // Added more horizontal padding for spacing
    backgroundColor: '#f5f5f5',
    borderBottomColor: '#ccc',  // Light grey border for subtle separation
    borderBottomWidth: 1,  // Only a thin line
    shadowColor: '#000',  // Shadow for elevation effect
    shadowOffset: { width: 0, height: 2 },  // Shadow positioned slightly below the header
    shadowOpacity: 0.1,  // Slightly visible
    shadowRadius: 1.5,  // Soft shadow edges
    elevation: 4,  // Elevation for Android (similar effect to shadow)
  }
});


export default Header;
