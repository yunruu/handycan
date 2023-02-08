import { View, Text } from "react-native";
import React from "react";
import { Card } from "../components/UI/Card";
import SearchBar from "../components/Dashboard/SearchBar";

const Dashboard = () => {
  return (
    <Card>
      <SearchBar />
      <Text> Dashboard </Text>
    </Card>
  );
};

export default Dashboard;
