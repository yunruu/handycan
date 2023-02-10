import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase/app";
import "firebase/database";

const NearbyLocations = () => {
  const [searchText, setSearchText] = useState("");
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  useEffect(() => {
    if (!userLocation) {
      return;
    }

    const database = firebase.database();
    const locationsRef = database.ref("locations");
    locationsRef.on("value", (snapshot) => {
      const locationsData = snapshot.val();
      const filteredLocations = Object.keys(locationsData)
        .filter((locationKey) =>
          locationsData[locationKey].name.includes(searchText)
        )
        .map((locationKey) => locationsData[locationKey]);
      setLocations(filteredLocations);
    });
  }, [userLocation, searchText]);

  const handleAddLocation = () => {
    if (!userLocation) {
      return;
    }

    const database = firebase.database();
    const locationsRef = database.ref("locations");
    const newLocationRef = locationsRef.push();
    newLocationRef.set({
      name: "My location",
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={handleAddLocation}>
        <Text>Add Location</Text>
      </TouchableOpacity>
      <TextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search for locations"
      />
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default NearbyLocations;
