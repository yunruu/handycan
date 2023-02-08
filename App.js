import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthStack from "./src/navigation/authStack";
import UserStack from "./src/navigation/userStack";
import Dashboard from "./src/screens/Dashboard";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return (
    <UserStack>
      <AuthStack />
    </UserStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
