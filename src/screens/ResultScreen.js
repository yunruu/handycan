import { Text, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/Dashboard/SearchBar";
import BottomSheet from "../components/Dashboard/BottomSheet";
import { TEXTS } from "../style/Styles";
import ProfileIcon from "../components/UI/ProfileIcon";
import MapScreen from "../screens/MapScreen";
import WhiteButton from "../components/UI/WhiteButton";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const ResultScreen = ({ navigation, route }) => {
  const latitudeDelta = 0.01;
  const longitudeDelta = 0.01;

  const { placeName, placeId, placeLat, placeLong } = route.params;

  const [location, setLocation] = useState({
    latitude: placeLat,
    longitude: placeLong,
    latitudeDelta: latitudeDelta,
    longitudeDelta: longitudeDelta,
  });

  return (
    <MapView style={styles.map} region={location} provider={PROVIDER_GOOGLE}>
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
      />
      {/* <View style={styles.container}>
        <ProfileIcon onPress={() => navigation.navigate("Login")} />
        <SearchBar onChangeText={onChangeText} />
      </View>
      <BottomSheet>
        <Text style={TEXTS.bottomSheetHeader}>{placeName}</Text>
        <View style={styles.buttonContainer}>
          <WhiteButton textField={"Reviews"} />
          <WhiteButton textField={"Directions"} />
          <WhiteButton textField={"Nearby"} />
        </View>
      </BottomSheet> */}
    </MapView>
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
  map: {
    flex: 1,
  },
});

export default ResultScreen;
