import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import propTypes from "prop-types";
import { themeColor } from "../global";
import { CheckBox, Icon } from "react-native-elements";
import gStyles from "../global/styles";

export default class CourseHistory extends React.Component {
  static propTypes = {
    course: propTypes.object.isRequired
  };
  render() {
    return (
      <ScrollView>
        {this.renderDetail()}
        {this.renderHomeworkList()}
      </ScrollView>
    );
  }
  renderDetail = () => {
    let course = this.props.course;
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{course.title}</Text>
        <View style={{height: 140}}/>
      </View>
    );
  };

  renderHomeworkList = () => {
    let course = this.props.course;
    let homeworkNum = course.homeworkList.length;
    let subtitle = "剩余 " + homeworkNum + " 项";
    return (
      <View style={styles.cardContainer}>
        <View style={{ flexDirection: "row", marginBottom: 16 }}>
          <Text style={styles.title}>作业列表</Text>
          <View style={gStyles.rightIconContainer}>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
        {course.homeworkList.map((item, index) => (
          <HomeworkItem homeworkItem={item} key={index} />
        ))}
      </View>
    );
  };
}

class HomeworkItem extends React.Component {
  static propTypes = {
    homeworkItem: propTypes.object.isRequired
  };
  render() {
    let item = this.props.homeworkItem;
    return (
      <View style={styles.listCardContainer}>
        <Icon name={"check-box-outline-blank"} color={themeColor.activeIcon} />
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.homeworkItemTitle}>{item.content}</Text>
          <Text style={styles.homeworkItemSubtitle}>5 天后</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    paddingVertical: 20,
    marginBottom: 10
  },
  listCardContainer: {
    marginHorizontal: 12,
    paddingHorizontal: 20,
    marginTop: 10,
    height: 85,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#CCCCCC",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.38,
    shadowRadius: 2,
    elevation: 1
  },
  title: {
    marginHorizontal: 26,
    fontWeight: "500",
    fontSize: 16,
    color: themeColor.primaryText
  },
  subtitle: {
    marginHorizontal: 26,
    fontWeight: "500",
    fontSize: 16,
    color: themeColor.secondaryText
  },
  homeworkItemTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: themeColor.primaryText
  },
  homeworkItemSubtitle: {
    marginTop: 8,
    fontSize: 14,
    color: themeColor.secondaryText
  }
});
