import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './../screens/HomeScreen';
import Theme from './../screens/Theme';

const Tab = createMaterialBottomTabNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name='home' color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Theme'
                    component={Theme}
                    options={{
                        tabBarLabel: 'Theme',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name='theme-light-dark' color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;