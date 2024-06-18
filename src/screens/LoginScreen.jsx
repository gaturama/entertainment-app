
import { View } from 'react-native';
import { Image } from 'expo-image';
import { TextInput, Button, Text } from 'react-native-paper';
import styles from '../styles';
import React, { useState } from 'react';

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.replace('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
            <Image
                source={require('../images/meme.png')}
                style={{
                    width: 65,
                    height: 65,
                    alignSelf: 'center',
                }}
            />
            <Text variant='headlineLarge' style={styles.selfCenter}>
                Welcome to Meme's Page
            </Text>

            <TextInput
                label='Email'
                mode='outlined'
                keyboardType='email-address'
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
                onPress={handleLogin}>Login</Button>

            <Button mode='contained'
                style={{
                    marginTop: 20,
                    maxWidth: 130,
                    alignSelf: 'center',
                }}
                onPress={() => navigation.navigate('Register')}>Register</Button>
            </View>
        </View>
    );
}

export default Login;