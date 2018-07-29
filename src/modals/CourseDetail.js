import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { colors, styles } from "../static";

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
      <View style={styles.simpleContainer}>
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
            <Text style={styles.courseBigTitle}>{courseTitle}</Text>
            <Text style={styles.courseDetail}>10 人正在关注</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "white", marginTop: 9, flex: 1 }} />
      </View>
    );
  }
}
