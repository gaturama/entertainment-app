import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigator;