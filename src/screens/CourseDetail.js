import React from "react";
import { View, ScrollView } from "react-native";
import gStyles from "../static/styles";
import StackHeader from "../shared/StackHeader";
import { courseData } from "../utils/DemoServer";
import ScrollableTabView from "react-native-scrollable-tab-view";
import TabBar from "../shared/TabBar";

export default class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
    let cid = props.navigation.getParam("cid", "1");
    let course = courseData.find(item => item.cid === cid);
    this.state = {
      course: course
    };
  }

  render() {
    return (
      <View style={gStyles.container}>
        <StackHeader
          leftTitle={this.state.course.title}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollableTabView
          prerenderingSiblingsNumber={4}
          renderTabBar={() => <TabBar />}
        >
          <ScrollView tabLabel={"任务"} />
          <ScrollView tabLabel={"群组"} />
          <ScrollView tabLabel={"资讯"} />
          <ScrollView tabLabel={"成就"} />
        </ScrollableTabView>
      </View>
    );
  }
}
