import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "../components/UI/Card";
import SearchBar from "../components/Dashboard/SearchBar";
import BottomSheet from "../components/Dashboard/BottomSheet";
import LocationBox from "../components/Dashboard/LocationBox";
import { STYLES } from "../style/Styles";

const Dashboard = () => {
  // Call Backend
  const onChangeText = () => {};
  return (
    <Card>
      <SearchBar onChangeText={onChangeText} />
      <BottomSheet>
        <Text style={STYLES.bottomSheetHeader}>Most accessible places</Text>
        <LocationBox text={"Haw Par Villa"} />
      </BottomSheet>
    </Card>
  );
};

export default Dashboard;
