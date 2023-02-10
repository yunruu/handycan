import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/screens/Login";
import Register from './src/screens/Register';
import Dashboard from './src/screens/Dashboard';
import SearchPage from './src/screens/SearchPage';
import Feedback from './src/screens/Feedback';
import ResultScreen from './src/screens/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="SearchPage" component={SearchPage} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
          <Stack.Screen name="Feedback" component={Feedback} options={{headerShown: false}} />
          <Stack.Screen name="ResultScreen" component={ResultScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
