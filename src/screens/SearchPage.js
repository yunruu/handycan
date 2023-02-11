import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { BUTTONS } from "../style/Styles";
import { getLocationList } from '../services/locationServices'
import ReturnButton from "../components/UI/ReturnButton";
import PageHeader from "../components/UI/PageHeader";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { COLORS } from "../style/Colors";

function SearchPage ({ navigation }) {
  const [searchRes, setSearchRes] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterType, setFilterType] = React.useState(-1);
  const [sortType, setSortType] = React.useState(-1);
  const [searchedPid, setSearchedPid] = React.useState(-1);
  const [searchedPName, setSearchedPName] = React.useState("");
  
  async function getSearchQueries(searchQuery, filterType, sortType) {
    const data = await getLocationList(searchQuery, filterType, sortType)
    setSearchRes(data);
  }

  const searchLocation = (searchQuery) => {
    if (searchQuery == "") {
      Alert.alert("Please enter a place to search for.");
    } else {
      getSearchQueries(searchQuery, filterType, sortType);
      console.log("Search queries received: " + searchQuery);
    }
  }

  return (
    <View style={styles.containerBlue}>
      <PageHeader header={"Search"} />
      {/* <SearchPageBar value={searchQuery} onChangeText={(searchQuery) => setSearchQuery(searchQuery)} /> */}
      <GooglePlacesAutocomplete 
        placeholder='Search' 
        styles={styles.searchBar}
        onPress={(data, details) => {
          // 'details' is provided when fetchDetails = true
          setSearchedPName(data.description); 
          setSearchedPid(data.place_id); 
          const coords = details.geometry.location;
          const lat = coords.lat;
          const lng = coords.lng;
          navigation.navigate("ResultScreen", {placeName: searchedPName, placeId: searchedPid, searchedLat: lat, searchedLng: lng});
        }} 
        query={{key: process.env.GOOGLE_MAPS_API_KEY, components: 'country:sg'}} 
        fetchDetails={true} 
        listViewDisplayed="auto"
        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')} />
      <ReturnButton onPress={() => navigation.navigate("Dashboard")} style={BUTTONS.returnButton} />
      {/* <SearchTool style={STYLES.searchTool} onPress={() => searchLocation()} /> */}
      {/* <View style={{position:'absolute', top:150, right: 30}}>
        <DropdownMenu onSelect={(filterType)=>setFilterType(filterType)} defaultButtonText={"Filter"} 
          options={filterTypes} buttonStyle={styles.dropdownContainer} dropdownStyle={styles.dropdownMenu} />
      </View> */}
    </View>

  );
}

export default SearchPage;

const styles = StyleSheet.create({
  dropdownContainer: {
    borderRadius: 30,
    backgroundColor: COLORS.white,
    borderColor: COLORS.dark_gray_01,
    borderWidth: 2,
    width: 115,
    height: 26,
  },
  dropdownMenu: {
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderColor: COLORS.dark_gray_01,
  },
  searchBar: {
    listView: {
      top: 95,
      borderRadius: 2,
      paddingHorizontal: 10
    },
    textInputContainer: {
      top: 95,
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
  containerBlue: {
    flex: 1,
    backgroundColor: COLORS.blue,
    justifyContent: "center",
  }
})