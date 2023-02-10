import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "./Colors";

const STYLES = StyleSheet.create({
  containerWhite: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },

  containerPink: {
    flex: 1,
    backgroundColor: COLORS.pink,
    alignItems: "center",
    justifyContent: "center",
  },

  containerBlue: {
    backgroundColor: COLORS.blue,
    alignItems: "center",
    justifyContent: "center",
  },

  textContainer1: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: 50,
    width: Dimensions.get("window").width * 0.7,
    margin: 15,
    paddingLeft: 20,
    paddingTop: 15,
  },

  feedbackContainer: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.dark_gray_01,
    borderRadius: 30,
    width: 325,
    height: 230,
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },

  transparentContainerHor: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },

  whiteBottomSheet: {
    backgroundColor: COLORS.white,
    position: "absolute",
    height: "90%",
    width: "100%",
    flexDirection: "row",
    top: 82,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  pageHeader: {
    flexDirection: "row",
    position: "absolute",
    top: 28,
    left: 60,
  },

  dropdownContainer: {
    borderRadius: 30,
    backgroundColor: COLORS.white,
    borderColor: COLORS.dark_gray_01,
    borderWidth: 2,
    width: 325,
    height: 45,
  },

  dropdownMenu: {
    borderRadius: 30,
    backgroundColor: COLORS.white,
    borderColor: COLORS.dark_gray_01,
  },

  ratingBar: {
    justifyContent: "center",
    flexDirection: "row",
  },
});

const BUTTONS = StyleSheet.create({
  primaryPink: {
    height: 50,
    backgroundColor: COLORS.pink,
    height: 45,
    width: 150,
    borderRadius: 30,
    margin: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },

  returnButton: {
    flexDirection: "row",
    position: "absolute",
    top: 35,
    left: 20,
  },
});

const TEXTS = StyleSheet.create({
  header: {
    // fontFamily: 'Inter',
    fontSize: 26,
    fontWeight: "bold",
  },

  headerWhite: {
    // fontFamily: 'Inter',
    fontSize: 26,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  subHeaderBlack: {
    // fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: "700",
  },

  body: {
    // fontFamily: 'Inter',
    fontSize: 20,
  },

  body22: {
    // fontFamily: 'Inter',
    fontSize: 22,
  },

  caption: {
    // fontFamily: 'Inter',
    fontSize: 14,
  },

  caption16: {
    // fontFamily: 'Inter',
    fontSize: 16,
  },

  placeholder16: {
    // fontFamily: 'Inter',
    fontSize: 16,
    color: COLORS.light_gray_02,
  },

  placeholder14: {
    // fontFamily: 'Inter',
    fontSize: 14,
    color: COLORS.light_gray_02,
  },

  colorButtonText: {
    // fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.white,
  },
  bottomSheetHeader: {
    fontWeight: "700",
    color: COLORS.white,
    fontSize: 20,
    alignSelf: "center",
  },
});

const LOGOS = StyleSheet.create({
  microLogo: {
    width: 20,
    height: 20,
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
  mediumLogo: {
    width: 120,
    height: 120,
    margin: 15,
  },
});

const SHADOWS = StyleSheet.create({
  bottomRight: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export { STYLES, BUTTONS, TEXTS, LOGOS, SHADOWS };
