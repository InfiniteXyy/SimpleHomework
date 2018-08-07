import React from "react";
import { Animated, FlatList, View } from "react-native";
import moment from "moment";
import momentLocale from "moment/locale/zh-cn";
import realm from "../global/realm";
import { DashboardHeader, PullDownTip, ToolbarView } from "../shared";
import ActionSheet from "react-native-actionsheet";
import { gStyles, routeNames } from "../global";
import { courseData } from "../utils/DemoServer";
import DashboardCard from "./DashboardCard";

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekTitle: "Week 3",
      dateTime: moment().format("dddd h:mm"),
      courses: [],
      scrollY: new Animated.Value(0) // for List Scroll Animation
    };

    // update time automatically
    this.timeUpdater = setInterval(() => {
      console.log("info: time updated");
      this.setState({ dateTime: moment().format("dddd h:mm") });
    }, 60000);

    this.actionList = [
      {
        title: "添加作业",
        type: "normal",
        method: () =>
          this.to(routeNames.homeworkAdd, {
            courses: this.state.courses
          })
      },
      {
        title: "使用demo",
        type: "normal",
        method: this.useDemo
      },
      {
        title: "重置数据库",
        type: "destructive",
        method: this.resetDatabase
      },
      { title: "取消", type: "cancel", method: () => {} }
    ];
    moment.updateLocale("zh-cn", momentLocale);
  }

  componentWillMount() {
    let courses = realm.objects("Course");
    courses.addListener(this.updateUI);
    this.homeworks = realm.objects("Homework");
    this.homeworks.addListener(this.alterHomework);
    this.setState({ courses });
  }

  componentWillUnmount() {
    this.state.courses.removeListener(this.updateUI);
    this.homeworks.removeAllListeners();
    clearInterval(this.timeUpdater);
  }

  updateUI = (newList, changes) => {
    this.forceUpdate();
  };

  alterHomework = (newList, changes) => {
    if (changes.insertions.length !== 0) {
      this.forceUpdate();
    }
  };

  render() {
    return (
      <View style={gStyles.container}>
        <PullDownTip
          content="下拉以添加更多作业"
          scrollY={this.state.scrollY}
        />
        <FlatList
          onScroll={this.handleScroll}
          onScrollEndDrag={event => {
            if (event.nativeEvent.contentOffset.y < -70) {
              this.actionList[0].method();
            }
          }}
          ListHeaderComponent={
            <DashboardHeader
              title={this.state.weekTitle}
              subtitle={this.state.dateTime}
              onClick={this.showActionSheet}
            />
          }
          keyExtractor={item => item.title}
          data={this.state.courses}
          renderItem={this.renderCard}
        />
        <ToolbarView
          title={this.state.weekTitle}
          scrollY={this.state.scrollY}
          onClick={this.showActionSheet}
        />
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          options={this.actionList.map(i => i.title)}
          cancelButtonIndex={this.actionList.findIndex(
            i => i.type === "cancel"
          )}
          destructiveButtonIndex={this.actionList.findIndex(
            i => i.type === "destructive"
          )}
          onPress={index => this.actionList[index].method()}
        />
      </View>
    );
  }

  renderCard = ({ item }) => {
    return <DashboardCard data={item} />;
  };

  to = (where, params) => {
    this.props.navigation.navigate(where, params);
  };

  showActionSheet = () => {
    this.ActionSheet.show();
  };

  handleScroll = event => {
    this.state.scrollY.setValue(event.nativeEvent.contentOffset.y);
  };

  useDemo = () => {
    realm.write(() => {
      realm.deleteAll();
      for (const item of courseData) {
        let course = realm.create("Course", {
          title: item.title,
          color: item.color
        });
        for (let h of item.data) {
          realm.create("Homework", {
            content: h.content,
            finished: h.finished,
            course: course
          });
        }
      }
    });
  };

  resetDatabase = () => {
    realm.write(() => {
      realm.deleteAll();
    });
  };
}
