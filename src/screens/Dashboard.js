import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { Card } from "../components/UI/Card";
import SearchBar from "../components/Dashboard/SearchBar";
import BottomSheet from "../components/Dashboard/BottomSheet";
import LocationBox from "../components/Dashboard/LocationBox";
import { STYLES, TEXTS } from "../style/Styles";
import ProfileIcon from "../components/UI/ProfileIcon";
import MapScreen from "../screens/MapScreen";

const Dashboard = ({ navigation }) => {
  // Call Backend
  const onChangeText = () => {};

  return (
    <MapScreen>
      <View style={styles.container}>
        <ProfileIcon onPress={() => navigation.navigate("Login")} />
        <SearchBar onChangeText={onChangeText} />
      </View>
      <BottomSheet>
        <Text style={TEXTS.bottomSheetHeader}>Most accessible places</Text>
        <LocationBox text={"Haw Par Villa"} />
      </BottomSheet>
    </MapScreen>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  profileIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    marginLeft: 50,
  },
});
