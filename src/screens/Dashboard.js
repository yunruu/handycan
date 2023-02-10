import { Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "../components/UI/Card";
import SearchBar from "../components/Dashboard/SearchBar";
import BottomSheet from "../components/Dashboard/BottomSheet";
import LocationBox from "../components/Dashboard/LocationBox";
import { STYLES } from "../style/Styles";
import ProfileIcon from "../components/UI/ProfileIcon";

const Dashboard = ({ navigation }) => {
  // Call Backend
  const onChangeText = () => {};
  return (
    <Card>
      <ProfileIcon onPress={() => navigation.navigate("Login")}
        style={styles.container} />
      <SearchBar onChangeText={onChangeText} />
      <BottomSheet>
        <Text style={STYLES.bottomSheetHeader}>Most accessible places</Text>
        <LocationBox text={"Haw Par Villa"} />
      </BottomSheet>
    </Card>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    top: 50,
    left: 15,
  },
});