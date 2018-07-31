import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { colors, styles } from "../static";
import { demoList } from "../DemoServer";
import { ModalIcon } from "../components/ModalElements";
import { StackHeader } from "../components/StackElements";

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
        <StackHeader
          leftTitle="作业"
          rightTitle={courseTitle}
          onPressLeft={() => this.props.navigation.goBack()}
          onPressRight={() =>
            this.props.navigation.navigate("CourseDetail", { cid: cid })
          }
        />

        <View style={styles.homeworkCard}>
          <Text style={{ color: colors.black, fontSize: 18 }}>{content}</Text>
        </View>

        <ModalIcon name="save" color={colors.primaryColor} />
      </View>
    );
  }
}
