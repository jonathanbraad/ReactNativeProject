import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Footer = ({ onHome, onPlanning }) => {
  return (
    <View style={styles.footerContainer}>
      <Button title="Home" onPress={onHome} />
      <Button title="Planning" onPress={onPlanning} />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,  // Good vertical padding for touchability
    paddingHorizontal: 20,  // Horizontal padding to keep buttons from the edges
    backgroundColor: '#f5f5f5',
    borderTopColor: '#ccc',  // Light grey border for subtle separation
    borderTopWidth: 1,  // Only a thin line
    shadowColor: '#000',  // Shadow for elevation effect
    shadowOffset: { width: 0, height: -2 },  // Shadow positioned slightly above the footer
    shadowOpacity: 0.1,  // Slightly visible
    shadowRadius: 1.5,  // Soft shadow edges
    elevation: 4,  // Elevation for Android (similar effect to shadow)
  }
});



export default Footer;
