import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../static";

export default class HomeworkDetail extends React.Component {
  render() {
    let cid = this.props.navigation.getParam("cid", "1");
    let data = this.props.screenProps.data;
    let courseTitle;
    for (let i of data) {
      if (i.cid === cid) {
        courseTitle = i.title;
      }
    }
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles.leftButtonContainer}>
              <Icon
                name="ios-arrow-back"
                type="ionicon"
                size={25}
                color={colors.black}
              />
              <Text style={styles.title}>课程</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.rightTitleContainer}>
            <Icon name="tune" type="material" size={25} color={colors.gray} />
          </View>
        </View>

        <View style={styles.whiteContainer}>
          <View
            style={{
              width: 113,
              height: 113,
              borderRadius: 8,
              backgroundColor: "#fafafa",
              marginRight: 30
            }}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.courseTitle}>{courseTitle}</Text>
            <Text style={styles.courseDetail}>10 人正在关注</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "white", marginTop: 9, flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1
  },
  headerContainer: {
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
  title: {
    marginLeft: 12,
    fontSize: 24,
    fontWeight: "600",
    color: colors.black
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "black"
  },
  courseDetail: {
    fontSize: 12,
    color: "#9B9B9B",
    marginTop: 10
  },
  subtitle: {
    marginRight: 12,
    fontSize: 24,
    fontWeight: "600",
    color: colors.gray
  },
  whiteContainer: {
    paddingHorizontal: 26,
    paddingVertical: 40,
    flexDirection: "row",
    backgroundColor: "white"
  }
});
