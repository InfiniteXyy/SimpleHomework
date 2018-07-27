import React from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../static";
import { ModalIcon } from "../components/ModalElements";

export default class HomeworkDetail extends React.Component {
  render() {
    let id = this.props.navigation.getParam("id", "2");
    let data = this.props.screenProps.data;
    let courseTitle, content;
    for (let i of data) {
      if (i.data != null) {
        for (let j of i.data) {
          if (j.id === id) {
            courseTitle = i.title;
            content = j.content;
          }
        }
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
              <Text style={styles.title}>作业</Text>
            </View>{" "}
          </TouchableOpacity>

          <View style={styles.rightTitleContainer}>
            <Text style={styles.subtitle}>{courseTitle}</Text>
            <Icon name="tune" type="material" size={25} color={colors.gray} />
          </View>
        </View>

        <View style={styles.homeworkCard}>
          <Text style={{ color: colors.black, fontSize: 18 }}>{content}</Text>
        </View>

        <ModalIcon name="save" color={colors.primaryColor} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: "center"
  },
  headerContainer: {
    height: 63,
    marginHorizontal: 16,
    backgroundColor: "white",
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
  subtitle: {
    marginRight: 12,
    fontSize: 24,
    fontWeight: "600",
    color: colors.gray
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
  }
});
