import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { registerUser } from '../API/authService'; // Ensure the path matches your directory structure

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async () => {
        try {
            // Pass name as additional data along with email and password
            const user = await registerUser(email, password, { name });
            console.log("User registered:", user);
            // Navigate to the Home screen after successful registration
            navigation.replace('Home');
        } catch (error) {
            // Handle registration errors
            setErrorMessage(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Register</Text>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
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
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <Button title="Register" onPress={handleRegister} />
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

export default RegisterScreen;
