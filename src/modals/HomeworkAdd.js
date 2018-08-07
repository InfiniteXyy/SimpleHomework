import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import gStyles from "../global/styles";
import StackHeader from "../shared/StackHeader";
import MyTextInput from "../shared/MyTextInput";
import { colors, themeColor } from "../global";
import { Icon, Button } from "react-native-elements";
import ActionSheet from "react-native-actionsheet";
import realm from "../global/realm";

export default class HomeworkAdd extends React.Component {
  constructor(props) {
    super(props);
    let courses = props.navigation.getParam("courses", ["无"]);
    this.state = {
      content: "",
      selectedCourse: null,
      courses
    };
    this.options = courses.map(item => item.title);
    this.options.push("取消");
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  buttons = [
    {
      icon: { type: "material", name: "access-time" },
      title: "设置截止时间",
      onClick: () => {}
    },
    {
      icon: { type: "material", name: "event" },
      title: "添加提醒",
      onClick: () => {}
    }
  ];

  selectCourse = index => {
    if (index !== this.options.length - 1) {
      this.setState({ selectedCourse: this.options[index] });
    }
  };

  render() {
    return (
      <View style={gStyles.container}>
        <StackHeader
          rightTitle={
            this.state.selectedCourse ? this.state.selectedCourse : "选择课程"
          }
          onPressLeft={this.goBack}
          onPressRight={this.showCourseSelection}
        />
        <ScrollView style={{ marginHorizontal: 24 }}>
          <MyTextInput
            style={{
              fontSize: 36,
              color: themeColor.primaryText,
              marginTop: 80
            }}
            placeholder="作业内容..."
            returnKeyType="done"
            onChangeText={text => {
              this.setState({ content: text });
            }}
          />
          <View style={styles.buttonContainer}>
            {this.buttons.map(this.renderButton)}
          </View>
          <Text style={{ fontSize: 18, color: themeColor.primaryText }}>
            备注
          </Text>
          <TouchableWithoutFeedback>
            <View style={styles.tagButton}>
              <Text style={{ color: themeColor.secondaryText }}>点击添加</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={{ alignSelf: "center", marginTop: 70 }}>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                onPress={this.addHomework}
                name="check"
                color={themeColor.primaryColor}
                reverse
                size={21}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ActionSheet
          title={"选择一门课程"}
          styles={styles} // for Android
          ref={o => (this.ActionSheet = o)}
          options={this.options}
          onPress={this.selectCourse}
          cancelButtonIndex={this.options.length - 1}
        />
      </View>
    );
  }

  renderButton = (item, index) => {
    return (
      <TouchableOpacity onPress={item.onClick} key={index.toString()}>
        <View style={styles.button}>
          <Icon {...item.icon} size={24} color={themeColor.activeIcon} />
          <Text style={{ color: themeColor.activeIcon, marginTop: 15 }}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  showCourseSelection = () => this.ActionSheet.show();

  addHomework = () => {
    let content = this.state.content.trim();
    if (content.length === 0) {
      alert("请输入正确的名字");
    } else {
      if (this.state.selectedCourse == null) {
        this.showCourseSelection();
      } else {
        let course = realm.objectForPrimaryKey(
          "Course",
          this.state.selectedCourse
        );
        realm.write(() => {
          realm.create("Homework", { content, course });
        });
        this.goBack();
      }
    }
  };
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 40,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: 150,
    height: 95,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowRadius: 2,
    shadowColor: "#cccccc",
    shadowOffset: { height: 2 },
    shadowOpacity: 0.38
  },
  tagButton: {
    marginTop: 16,
    height: 40,
    backgroundColor: "white",
    borderStyle: "dashed",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: themeColor.inactiveIcon,
    alignItems: "center",
    justifyContent: "center"
  }
});
