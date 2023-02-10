import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { StyleSheet } from "react-native";

const MapScreen = ({ children, placeId }) => {
  const latitudeDelta = 0.01;
  const longitudeDelta = 0.01;
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: latitudeDelta,
    longitudeDelta: longitudeDelta,
  });

  useEffect(() => {
    async function fetchLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        Location.installWebGeolocationPolyfill();
      } else {
        Location.installWebGeolocationPolyfill();
        try {
          let location = await Location.getCurrentPositionAsync({});
          setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchLocation();
  }, [location]);

  return (
    <MapView
      style={styles.map}
      initialRegion={location}
      showsUserLocation
      followUserLocation
    >
      {children}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    alignItems: "center",
  },
});

export default MapScreen;
