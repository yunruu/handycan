import { Text, StyleSheet, View } from "react-native";
import React from "react";
import SearchBar from "../components/Dashboard/SearchBar";
import BottomSheet from "../components/Dashboard/BottomSheet";
import { TEXTS } from "../style/Styles";
import ProfileIcon from "../components/UI/ProfileIcon";
import MapScreen from "../screens/MapScreen";
import WhiteButton from "../components/UI/WhiteButton";

const ResultScreen = ({ navigation, route }) => {
  // Call Backend
  const onChangeText = () => {};

  return (
    <MapScreen>
      <View style={styles.container}>
        <ProfileIcon onPress={() => navigation.navigate("Login")} />
        <SearchBar onChangeText={onChangeText} />
      </View>
      <BottomSheet>
        <Text style={TEXTS.bottomSheetHeader}>{route.param.placeName}</Text>
        <View style={styles.buttonContainer}>
          <WhiteButton textField={"Reviews"} />
          <WhiteButton textField={"Directions"} />
          <WhiteButton textField={"Nearby"} />
        </View>
      </BottomSheet>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default ResultScreen;
