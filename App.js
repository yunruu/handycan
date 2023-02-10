import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthStack from "./src/navigation/AuthStack";
import Dashboard from "./src/screens/Dashboard";
import MapScreen from "./src/screens/MapScreen";

export default function App() {
  return (
    <AuthStack/>
  )
}
