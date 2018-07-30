import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { colors, styles } from "../static";
import { demoList } from "../DemoServer";
import { ModalIcon } from "../components/ModalElements";

export default class HomeworkDetail extends React.Component {
  render() {
    let id = this.props.navigation.getParam("id", "2");
    let courseTitle, content, cid;
    for (let i of demoList) {
      if (i.data != null) {
        for (let j of i.data) {
          if (j.id === id) {
            cid = i.cid;
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
            </View>
          </TouchableOpacity>

          <View style={styles.rightTitleContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("CourseDetail", { cid: cid })
              }
            >
              <Text style={styles.subtitle}>{courseTitle}</Text>
            </TouchableOpacity>
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
