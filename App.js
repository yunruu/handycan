import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ReviewScreen from "./src/screens/ReviewScreen";

export default function App() {
  return <ReviewScreen locationName={"Random Birmingham"} placeId={"100"} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
