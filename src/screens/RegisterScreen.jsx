import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import styles from '../styles';

function Register({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.selfCenter}>
                Register
            </Text>

            <TextInput
                label='Email'
                mode='outlined'
                value={email}
                onChangeText={setEmail}

                style={{
                    marginTop: 10,
                    marginBottom: 10,
                    width: 300,
                    alignSelf: 'center',
                }}
            />
            <TextInput
                label='Password'
                mode='outlined'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={{
                    marginTop: 10,
                    marginBottom: 10,
                    width: 300,
                    alignSelf: 'center',
                }}
            />
            <Button mode='contained'
                style={{
                    marginTop: 10,
                    maxWidth: 130,
                    alignSelf: 'center',
                }}
                onPress={handleRegister}>Register</Button>
        </View>
    );
}

export default Register;