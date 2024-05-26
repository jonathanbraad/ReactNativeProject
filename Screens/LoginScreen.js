import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { loginUser } from '../API/authService.js'; // Import the authentication service function

const LoginScreen = ({ navigation }) => {
    // State variables for input and error handling
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Login button handler
    const handleLogin = async () => {
        try {
            // Call the login service and pass the input data
            await loginUser(email, password);
            // Navigate to the next screen upon successful login
            navigation.replace('Home'); // Adjust the route as per your navigation setup
        } catch (error) {
            // Capture error messages and display them
            setErrorMessage(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            {/* Display an error message if login fails */}
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <Button title="Log In" onPress={handleLogin} />
            <Button title="Create new account" onPress={() => navigation.navigate('Register')} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        margin: 10,
        padding: 10,
        borderWidth: 1,
    },
    error: {
        color: 'red',
    },
});

export default LoginScreen;
