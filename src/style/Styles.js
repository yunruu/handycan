import { StyleSheet } from "react-native";
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
    width: 300,
    margin: 12,
    paddingLeft: 21,
    paddingTop: 15,
  },

  transparentContainerHor: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  bottomSheetHeader: {
    alignSelf: "center",
    fontWeight: "700",
    color: COLORS.white,
    fontSize: 20,
  },
});

const buttons = StyleSheet.create({
  primaryPink: {
    height: 50,
    backgroundColor: COLORS.pink,
    height: 45,
    width: 150,
    borderRadius: 30,
    margin: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});

const text = StyleSheet.create({
  header: {
    // fontFamily: 'Inter',
    fontSize: 32,
  },
  body: {
    // fontFamily: 'Inter',
    fontSize: 20,
  },

  caption: {
    // fontFamily: 'Inter',
    fontSize: 14,
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
});

const logos = StyleSheet.create({
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

export { STYLES, buttons, text, logos };
