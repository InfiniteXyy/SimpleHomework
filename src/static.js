"use strict";
import { StyleSheet } from "react-native";

const colors = {
  primaryColor: "#019AE8",
  icon: "#757575",
  rice: "#fafafa",
  black: "#4a4a4a",
  gray: "#9B9B9B",
  green: "#7ED321",
  brown: "#8B572A",
  blue: "#019AE8",
  rememberBlue: "#89c3eb"
};

const urls = {
  avatar:
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532851530477&di=a49376cb1357fb7ec2280ed2565a48d7&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F20%2F06%2F50%2F86p58PIChKY_1024.jpg"
};

const wordsStyle = {
  title: {
    marginLeft: 12,
    fontSize: 24,
    fontWeight: "600",
    color: colors.black
  },
  subtitle: {
    marginRight: 12,
    fontSize: 24,
    fontWeight: "600",
    color: colors.gray
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#717171"
  },
  courseBigTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "black"
  },
  courseDetail: {
    fontSize: 12,
    color: "#9B9B9B",
    marginTop: 10
  },
  bigBlueTitle: {
    fontSize: 48,
    color: colors.primaryColor
  },
  bigBlueSubtitle: {
    marginTop: 8,
    fontSize: 16,
    color: colors.gray
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.black
  },
  profileSubtitle: {
    marginTop: 8,
    fontSize: 16,
    color: colors.gray
  },
  settingItem: {
    fontSize: 18,
    color: "#6A6A6A",
    fontWeight: "400"
  },
  listDetail: {
    fontSize: 14,
    color: "#4A4A4A",
    marginLeft: 16
  }
};

const cardStyle = {
  courseCard: {
    backgroundColor: "#fff",
    margin: 13,
    width: 143,
    height: 62,
    borderRadius: 4,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#CCCCCC",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.0,
    shadowRadius: 2,
    elevation: 1
  },
  homeworkCard: {
    marginBottom: 75,
    backgroundColor: "white",
    marginTop: 66,
    width: 285,
    height: 200,
    borderRadius: 6,
    shadowColor: "#aaaaaa",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.68,
    shadowRadius: 4,
    paddingHorizontal: 26,
    paddingVertical: 16
  },
  addHomeworkCard: {
    backgroundColor: "white",
    marginTop: 29,
    width: 285,
    height: 145,
    borderRadius: 6,
    shadowColor: "#aaaaaa",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.68,
    shadowRadius: 4,
    paddingHorizontal: 26,
    paddingVertical: 16
  }
};

const containerStyle = {
  simpleContainer: {
    flex: 1,
    marginTop: 20
  },
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
  headerContainer: {
    alignSelf: "flex-start",
    height: 63,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  leftButtonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  rightTitleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  profileHeaderContainer: {
    marginTop: 51,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 32
  },
  settingItemContainer: {
    height: 56,
    alignItems: "center",
    justifyContent: "center"
  },
  listContainer: {
    marginLeft: 16,
    borderBottomColor: "#cccccc",
    marginBottom: 11,
    borderBottomWidth: 0.5
  },
  whiteContainer: {
    paddingHorizontal: 26,
    paddingVertical: 40,
    flexDirection: "row",
    backgroundColor: "white"
  }
};

const styles = StyleSheet.create({
  ...containerStyle,
  ...cardStyle,
  ...wordsStyle
});

export { colors, styles, urls };
