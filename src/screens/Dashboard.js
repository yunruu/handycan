import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "../components/UI/Card";
import SearchBar from "../components/Dashboard/SearchBar";
import BottomModal from "../components/Dashboard/BottomModal";

const Dashboard = () => {
  return (
    <Card>
      <SearchBar />
      <BottomModal>
        <Text>Most accessible places</Text>
      </BottomModal>
    </Card>
  );
};

const styles = StyleSheet.create({});
export default Dashboard;
