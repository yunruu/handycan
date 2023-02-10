import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
import SearchPage from '../screens/SearchPage';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="SearchPage" component={SearchPage} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
