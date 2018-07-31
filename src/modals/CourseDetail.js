import React from "react";
import {
  View,
  FlatList,
  Text,
  ScrollView,
  Animated,
  Dimensions
} from "react-native";
import { colors, styles } from "../static";
import ScrollableTabView from "react-native-scrollable-tab-view";
import TabBarView from "../components/TabBarView";
import { StackHeader } from "../components/StackElements";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class HomeworkDetail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0)
    };
    this.goToPage = this.goToPage.bind(this);
  }

  goToPage(i) {
    this.tabView.goToPage(i);
  }

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
          leftTitle="课程"
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollView stickyHeaderIndices={[1]}
          style={{flex: 1}}>
          <CourseDetailHeader data={courseData} />
          <TabBarView
            tabs={[
              { name: "任务", page: 0 },
              { name: "群组", page: 1 },
              { name: "资讯", page: 2 },
              { name: "成就", page: 3 }
            ]}
            goToPage={this.goToPage}
            containerWidth={SCREEN_WIDTH}
            scrollValue={this.state.scrollX}
          />
          <ScrollableTabView
            renderTabBar={() => <View />}
            onScroll={val => this.state.scrollX.setValue(val)}
            ref={tabView => {
              this.tabView = tabView;
            }}
          >
            <HomeworkPage />
            <HomeworkPage />
            <HomeworkPage />
            <HomeworkPage />
          </ScrollableTabView>
        </ScrollView>
      </View>
    );
  }
}

class HomeworkPage extends React.PureComponent {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{ height: 200, backgroundColor: "powderblue", padding: 20 }}/>
        <View style={{ height: 200, backgroundColor: "skyblue", padding: 20 }}/>
        <View style={{ height: 200, backgroundColor: "steelblue", padding: 20 }}/>
      </View>

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
