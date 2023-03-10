import { Text, StyleSheet, View } from "react-native";
import React from "react";
import SearchBar from "../components/Dashboard/SearchBar";
import BottomSheet from "../components/Dashboard/BottomSheet";
import { TEXTS } from "../style/Styles";
import ProfileIcon from "../components/UI/ProfileIcon";
import MapScreen from "../screens/MapScreen";

const Dashboard = ({ navigation }) => {
  // Call Backend
  const onChangeText = () => {};

  return (
    <MapScreen>
      <View style={styles.container}>
        <ProfileIcon />
        <SearchBar onChangeText={onChangeText} />
      </View>
    </MapScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
  },
});

export default Dashboard;
