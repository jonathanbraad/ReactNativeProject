import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Header = ({ onLogin, onCreateAccount }) => {
  return (
    <View style={styles.headerContainer}>
      <Button title="Change account" onPress={onLogin} />
      <Button title="Create account" onPress={onCreateAccount} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Center align items horizontally
    backgroundColor: '#f5f5f5', // Light grey background color
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});


export default Header;
