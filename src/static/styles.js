import { StyleSheet, Platform } from "react-native";

const gStyles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0,
    flex: 1
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row"
  }
});

export default gStyles;
