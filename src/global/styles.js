import { StyleSheet, Platform } from "react-native";

const gStyles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0,
    flex: 1
  },
  cardContainer: {
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "white",
    shadowColor: "#CCCCCC",
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
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
