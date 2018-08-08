import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import MyTextInput from "../shared/MyTextInput";
import { themeColor } from "../global";
import { Icon } from "react-native-elements";
import ActionSheet from "react-native-actionsheet";
import realm from "../global/realm";
import BorderHeader from "../shared/BorderHeader";

export default class HomeworkAdd extends React.Component {
  constructor(props) {
    super(props);
    let courses = props.data;
    this.state = {
      content: "",
      selectedCourse: null,
      courses,
      deadline: new Date()
    };
    this.options = courses.map(item => item.title);
    this.options.push("取消");
  }

  goBack = () => {
    this.props.goBack();
  };

  selectCourse = index => {
    if (index !== this.options.length - 1) {
      this.setState({ selectedCourse: this.options[index] });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <BorderHeader
          onPressLeft={this.goBack}
          onPressRight={this.addHomework}
        />
        <MyTextInput
          style={{
            fontSize: 36,
            color: themeColor.primaryText,
            marginTop: 20
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

        <ActionSheet
          title={"选择一门课程"}
          styles={{}} // for Android
          ref={o => (this.ActionSheet = o)}
          options={this.options}
          onPress={this.selectCourse}
          cancelButtonIndex={this.options.length - 1}
        />
      </View>
    );
  }

  showCourseSelection = () => this.ActionSheet.show();
  
  renderButton = (item, index) => {
    return (
      <TouchableOpacity onPress={item.onClick} key={index.toString()}>
        <View style={styles.button}>
          <Icon {...item.icon} size={24} color={themeColor.activeIcon} />
          <Text
            style={{
              color: themeColor.activeIcon,
              marginTop: 12,
              fontSize: 15
            }}
          >
            {item.title()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  getCourseTitle = () => {
    return this.state.selectedCourse ? this.state.selectedCourse : "设置课程";
  };

  buttons = [
    {
      icon: { type: "entypo", name: "blackboard" },
      title: this.getCourseTitle,
      onClick: this.showCourseSelection
    },
    {
      icon: { type: "material", name: "access-time" },
      title: () => "设置截止时间",
      onClick: this.showDatePicker
    }
  ];

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
  container: {
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    paddingHorizontal: 24,
    paddingBottom: 80,
    backgroundColor: "white"
  },
  buttonContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  button: {
    marginRight: 16,
    width: 110,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderStyle: "dashed",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: themeColor.inactiveIcon,
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
