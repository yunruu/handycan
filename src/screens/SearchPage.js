import React from "react";
import { Text, Image, Pressable, View, StyleSheet } from "react-native";
import BottomSheet from "../components/Dashboard/BottomSheet";
import SearchBar from "../components/Dashboard/SearchBar";
import { Card } from "../components/UI/Card";
import ProfileIcon from "../components/UI/ProfileIcon";
import { LOGOS } from "../style/Styles";

function SearchPage({ locationName, navigation }) {
  // TODO
  const onChangeLocation = () => {};
  return (
    <Card>
      <ProfileIcon
        onPress={() => navigation.navigate("Login")}
        style={styles.container}
      />
      <SearchBar value={locationName} onChangeText={onChangeLocation} />
      <BottomSheet>
        <Text>{locationName}</Text>
      </BottomSheet>
    </Card>
  );
}

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    top: 50,
    left: 15,
  },
});
