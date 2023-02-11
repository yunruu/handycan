import { Text, StyleSheet, View, Button, Pressable, Alert, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/Dashboard/SearchBar";
import BottomSheet from "../components/Dashboard/BottomSheet";
import { STYLES, TEXTS, BUTTONS } from "../style/Styles";
import ProfileIcon from "../components/UI/ProfileIcon";
import MapScreen from "../screens/MapScreen";
import WhiteButton from "../components/UI/WhiteButton";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { COLORS } from "../style/Colors";
import WhiteBottomSheet from "../components/UI/WhiteBottomSheet";
import BlueBottomSheet from "../components/UI/BlueBottomSheet";
import ReturnButton from "../components/UI/ReturnButton";
import { SafeAreaView } from "react-native-safe-area-context";

// navigator.geolocation = require('@react-native-community/geolocation');

const ResultScreen = ({ navigation, route }) => {
  const {placeName, placeId, lat, long} = route.params;
  const latitudeDelta = 0.01;
  const longitudeDelta = 0.01;
  console.log(placeName);
  console.log(placeId);

  const [location, setLocation] = useState({
    latitude: lat,
    longitude: long,
    latitudeDelta: latitudeDelta,
    longitudeDelta: longitudeDelta,
  });

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <MapView style={styles.map} region={location} provider={PROVIDER_GOOGLE} >
        <ReturnButton onPress={() => navigation.navigate("SearchPage")} />
        <Pressable onPress={() => navigation.navigate("SearchPage")}>
          <View style={styles.searchBar} />
        </Pressable>
        <BlueBottomSheet justifyContent={'center'}>
            <Text style={[TEXTS.bottomSheetHeader,{alignSelf:'center', marginTop:20}]}>{placeName}</Text>
            <Text style={[TEXTS.caption14White, {alignSelf:'center', marginVertical: 5}]}>Latitude: {location.latitude}, Longitude: {location.longitude}</Text>
            <View style={styles.buttonContainer}>
              <WhiteButton textField={"Reviews"} 
                onPress={() => navigation.navigate("ReviewScreen", {
                  placeName: placeName, 
                  placeId: placeId, 
                  lat: lat, 
                  long: long})} />
              <WhiteButton textField={"Directions"} />
              <WhiteButton textField={"Nearby"} onPress={() => navigation.navigate("Nearby", {
                  placeName: placeName, 
                  placeId: placeId, 
                  lat: lat, 
                  long: long})} />
            </View>
          </BlueBottomSheet>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      {/* <BlueBottomSheet top={535} height={"25%"} justifyContent={'center'}>
        <View style={{flex:1}}>
          <Text style={TEXTS.bottomSheetHeader}>{placeName}</Text>
          <Text style={[TEXTS.caption14White, {alignSelf:'center'}]}>Latitude: {location.latitude}, Longitude: {location.longitude}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <WhiteButton textField={"Reviews"} />
          <WhiteButton textField={"Directions"} />
          <WhiteButton textField={"Nearby"} />
        </View>
      </BlueBottomSheet> */}
      </MapView>
    </SafeAreaView>
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
    alignItems:'center',
    padding: 15,
  },
  map: {
    flex: 1,
  },
  searchBar: {
    listView: {
      top: 25,
      borderRadius: 2,
      paddingHorizontal: 10
    },
    textInputContainer: {
      top: 25,
      paddingHorizontal: 10
    },
    textInput: {
      height: 45,
      color: COLORS.dark_gray_02,
      fontSize: 16,
      borderRadius: 30,
      paddingHorizontal: 15, 
    },
    description: {
      fontSize: 16,
    }
  },
  searchBar: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: 45,
    top: 20,
    paddingLeft: 20,
    paddingTop: 15,
    width: "90%",
    alignSelf: 'center',
  },
  safeAreaContainer: {
    flex: 1,
    marginTop:StatusBar.currentHeight
  },
});

export default ResultScreen;
