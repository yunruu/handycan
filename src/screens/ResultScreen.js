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
        <ProfileIcon onPress={() => navigation.navigate("Login")} />
        <SearchBar onChangeText={onChangeText} />
      </View>
      <BottomSheet>
        <Text style={TEXTS.bottomSheetHeader}>Most accessible places</Text>
      </BottomSheet>
    </MapScreen>
  );
};
