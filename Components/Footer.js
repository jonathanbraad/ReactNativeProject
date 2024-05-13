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
    alignItems: 'center', // Center align items horizontally
    backgroundColor: '#f5f5f5', // Light grey background color
    paddingVertical: 50,
    paddingHorizontal: 20,
  }
});



export default Footer;
