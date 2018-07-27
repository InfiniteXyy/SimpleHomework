"use strict";
import { StyleSheet } from "react-native";

const colors = {
  primaryColor: "#019AE8",
  icon: "#757575",
  black: "#4a4a4a",
  gray: "#9B9B9B",
  green: "#7ED321",
  brown: "#8B572A",
  blue: "#019AE8",
  rememberBlue: "#89c3eb"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center"
  },
  modalClose: {
    marginTop: 14,
    marginRight: 21,
    alignSelf: "flex-end"
  },
  loginHeader: {
    marginTop: 16,
    marginLeft: 52,
    alignSelf: "flex-start"
  },
  moreOption: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  bigBlueTitle: {
    fontSize: 48,
    color: colors.primaryColor
  },
  bigBlueSubtitle: {
    marginTop: 8,
    fontSize: 16,
    color: colors.gray
  }
});

export { colors, styles };
