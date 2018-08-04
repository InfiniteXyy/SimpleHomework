import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Animated
} from "react-native";
import moment from "moment";
import momentLocale from "moment/locale/zh-cn";
import { ToolbarView, DashboardHeader, PullDownTip } from "../shared";
import ActionSheet from "react-native-actionsheet";
import { gStyles, themeColor, colors, routeNames } from "../static";
import { courseData } from "../utils/DemoServer";
import { Icon } from "react-native-elements";

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekTitle: "Week 3",
      dateTime: moment().format("dddd h:mm"),
      courses: courseData, // for demo,
      scrollY: new Animated.Value(0) // for List Scroll Animation
    };
    this.actionList = [
      {
        title: "添加作业",
        type: "normal",
        method: () =>
          this.to(routeNames.homeworkAdd, {
            courses: courseData.map(item => item.title)
          })
      },
      { title: "取消", type: "cancel", method: () => {} }
    ];
    moment.updateLocale("zh-cn", momentLocale);
  }

  to = (where, params) => {
    this.props.navigation.navigate(where, params);
  };

  showActionSheet = () => {
    this.ActionSheet.show();
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
              this.actionList[0].method()
            }
          }}
          ListHeaderComponent={
            <DashboardHeader
              title={this.state.weekTitle}
              subtitle={this.state.dateTime}
              onClick={this.showActionSheet}
            />
          }
          keyExtractor={item => item.cid}
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
          onPress={index => this.actionList[index].method()}
        />
      </View>
    );
  }

  renderCard = ({ item }) => {
    if (!item.data || item.data.length === 0) return <View />;
    return (
      <View style={styles.cardContainer}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <View style={gStyles.rightIconContainer}>
                <Icon
                  name="ios-more"
                  type="ionicon"
                  size={24}
                  color={themeColor.inactiveIcon}
                />
              </View>
            </View>
          }
          keyExtractor={item => item.hid}
          data={item.data}
          renderItem={this.renderItem}
        />
      </View>
    );
  };

  renderItem = ({ item }) => {
    let iconKind = item.finished
      ? { type: "ionicon", name: "ios-checkmark-circle" }
      : { type: "font-awesome", name: "circle-thin" };
    let textStyle = item.finished
      ? { fontSize: 15, textDecorationLine: "line-through", color: "#DDDDDD" }
      : { fontSize: 15, color: themeColor.primaryText };
    return (
      <TouchableOpacity
        onPress={() => {
          item.finished = !item.finished;
          this.setState({});
        }}
        onLongPress={() =>
          this.to(routeNames.homeworkDetail, { hid: item.hid })
        }
      >
        <View style={styles.cardItemContainer}>
          <Text style={textStyle}>{item.content}</Text>
          <View style={gStyles.rightIconContainer}>
            <Icon {...iconKind} size={18} color={colors.lightBlue} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  handleScroll = event => {
    this.state.scrollY.setValue(event.nativeEvent.contentOffset.y);
  };
}

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 8,
    marginHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: "white",
    //TODO: android beautify
    shadowColor: "#CCCCCC",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2
  },
  cardTitleContainer: {
    marginBottom: 12,
    height: 56,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#DDDDDD"
  },
  cardTitle: {
    color: themeColor.primaryText,
    fontSize: 18,
    fontWeight: "bold"
  },
  cardItemContainer: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 39
  }
});
