import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthStack from "./src/navigation/AuthStack";
import UserStack from "./src/navigation/userStack";
import Dashboard from "./src/screens/Dashboard";
import LoginScreen from "./src/screens/LoginScreen";
import SearchPage from "./src/screens/SearchPage";

export default function App() {
  return <SearchPage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
