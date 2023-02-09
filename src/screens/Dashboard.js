import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "../components/UI/Card";
import SearchBar from "../components/Dashboard/SearchBar";
import BottomSheet from "../components/Dashboard/BottomSheet";
import colours from "../styles/colours";

const Dashboard = () => {
  return (
    <Card>
      <SearchBar />
      <BottomSheet>
        <Text style={styles.text}>Most accessible places</Text>
      </BottomSheet>
    </Card>
  );
  }

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    fontWeight: "700",
    color: colours.white,
    fontSize: 20,
  },
});
export default Dashboard;
