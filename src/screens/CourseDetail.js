import React from "react";
import { View, ScrollView } from "react-native";
import gStyles from "../global/styles";
import StackHeader from "../shared/StackHeader";
import TabBar from "../shared/TabBar";
import CourseNews from "./CourseNews";

export default class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.navigation.getParam("title", "返回");
  }

  render() {
    return (
      <View style={gStyles.container}>
        <StackHeader
          leftTitle={this.title}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <CourseNews/>
      </View>
    );
  }
}
/*
<ScrollableTabView
  prerenderingSiblingsNumber={4}
  renderTabBar={() => <TabBar />}
>
  <ScrollView tabLabel={"任务"} />
  <ScrollView tabLabel={"群组"} />
  <ScrollView tabLabel={"资讯"} />
  <ScrollView tabLabel={"成就"} />
</ScrollableTabView>
*/
