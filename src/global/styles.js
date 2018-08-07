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
  },
  listContainer: {
    marginLeft: 16,
    borderBottomColor: "#cccccc",
    paddingTop: 16,
    borderBottomWidth: 0.5
  }
});

export default gStyles;
