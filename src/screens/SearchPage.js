import React from "react";

import { Text, Image, Pressable, View, StyleSheet, Alert, ScrollView } from "react-native";
import SearchPageBar from "../components/UI/SearchPageBar";
import { BUTTONS, LOGOS, STYLES, TEXTS } from "../style/Styles";
import { filterBy, getLocation, getLocationList } from '../services/locationServices'
import ReturnButton from "../components/UI/ReturnButton";
import PageHeader from "../components/UI/PageHeader";
import WhiteBottomSheet from "../components/UI/WhiteBottomSheet";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { COLORS } from "../style/Colors";
import DropdownMenu from "../components/UI/DropdownMenu";


const round2dp = (val) => {
  return val.toFixed(1);
}

const filterTypes = ["Audio", "Mobility", "Visual", "Mental", "Other"];

function SearchPage ({ navigation }) {
  const [searchRes, setSearchRes] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterType, setFilterType] = React.useState(-1);
  const [sortType, setSortType] = React.useState(-1);
  const [searchedPid, setSearchedPid] = React.useState(-1);

  // React.useEffect(() => {
  //   async function getSearchQueries(searchQuery, filterType, sortType) {
  //     const data = await getLocationList(searchQuery, filterType, sortType)
  //     setSearchRes(data);
  //   }
  //   getSearchQueries()
  // }, []);
  
  async function getSearchQueries(searchQuery, filterType, sortType) {
    const data = await getLocationList(searchQuery, filterType, sortType)
    setSearchRes(data);
  }

  const searchLocation = () => {
    if (searchQuery == "") {
      Alert.alert("Please enter a place to search for.");
    } else {
      getSearchQueries(searchQuery, filterType, sortType);
      console.log("Search queries received: " + searchQuery);
    }
  }

  const handleLocationPress = (placeId) => {
    setSearchedPid(placeId);
    navigation.navigate("Feedback");
  }

  return (
    <View style={STYLES.containerBlue}>
      <ReturnButton onPress={() => navigation.navigate("Dashboard")} style={BUTTONS.returnButton} />
      <PageHeader header={"Search"} />
      {/* <SearchPageBar value={searchQuery} onChangeText={(searchQuery) => setSearchQuery(searchQuery)} /> */}
      <GooglePlacesAutocomplete placeholder='Search' styles={{
        textInputContainer: {
          width: 320,
          margin: 95,
        },
        textInput: {
          height: 45,
          color: COLORS.dark_gray_02,
          fontSize: 16,
          borderRadius: 30,
          paddingHorizontal: 15,
        }}} onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details); }} query={{key: 'YOUR API KEY',}} />
      {/* <SearchTool style={STYLES.searchTool} onPress={() => searchLocation()} /> */}
      <View style={{position:'absolute', top:150, right: 30}}>
        <DropdownMenu onSelect={(filterType)=>setFilterType(filterType)} defaultButtonText={"Filter"} 
          options={filterTypes} buttonStyle={styles.dropdownContainer} dropdownStyle={styles.dropdownMenu} />
      </View>
      <WhiteBottomSheet top={200} >
        <ScrollView style={{paddingTop: 20}}>
          {
            searchRes == [] 
              ? <View/>
              : searchRes.map(elem => {
                return(
                  <Pressable key={elem.placeId} style={STYLES.listItems} onPress={() => handleLocationPress(elem.placeId)}>
                    <Text style={TEXTS.body22}>{elem.name} </Text>
                    <Text>Rating: {round2dp(elem.locationScore)}</Text>
                  </Pressable>
                )
              })
          }
        </ScrollView>
      </WhiteBottomSheet>
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
    width: 100,
    height: 26,
  },
  dropdownMenu: {
    borderRadius: 10,
    backgroundColor: COLORS.white,
    borderColor: COLORS.dark_gray_01,
  },
})