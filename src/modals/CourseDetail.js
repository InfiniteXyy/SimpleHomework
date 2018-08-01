import React from "react";
import { View, Text, ScrollView, Animated, Dimensions } from "react-native";
import { colors, styles } from "../static";
import ScrollableTabView from "react-native-scrollable-tab-view";
import TabBarView from "../components/TabBarView";
import { StackHeader } from "../components/StackElements";

export default class HomeworkDetail extends React.PureComponent {
  render() {
    let cid = this.props.navigation.getParam("cid", "1");
    let data = this.props.screenProps.data;
    let courseData;
    for (let i of data) {
      if (i.cid === cid) {
        courseData = i;
      }
    }

    return (
      <View style={styles.simpleContainer}>
        <StackHeader
          leftTitle={courseData.title}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollableTabView
          prerenderingSiblingsNumber={4}
          renderTabBar={() => <TabBarView />}>
          <HomeworkPage tabLabel={"任务"} />
          <HomeworkPage tabLabel={"群组"} />
          <HomeworkPage tabLabel={"资讯"} />
          <HomeworkPage tabLabel={"成就"} />
        </ScrollableTabView>
      </View>
    );
  }
}

class HomeworkPage extends React.PureComponent {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            height: 600,
            padding: 20,
            alignItems: "center",
          }}
        >
          <Text>{this.props.tabLabel}</Text>
        </View>
      </ScrollView>
    );
  }
}

class CourseDetailHeader extends React.PureComponent {
  render() {
    let courseData = this.props.data;
    return (
      <View
        style={{
          paddingVertical: 40,
          backgroundColor: "white",
          flexDirection: "row",
          borderBottomWidth: 9,
          borderBottomColor: colors.rice
        }}
      >
        <View
          style={{
            marginHorizontal: 20,
            alignSelf: "center",
            width: 110,
            height: 110,
            borderRadius: 8,
            backgroundColor: "#fafafa"
          }}
        />
        <View>
          <Text style={styles.courseBigTitle}>{courseData.title}</Text>
          <Text style={styles.courseDetail}>10 人正在关注</Text>
        </View>
      </View>
    );
  }
}
