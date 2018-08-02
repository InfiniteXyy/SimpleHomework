import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  FlatList
} from "react-native";
import moment from "moment";

import { Icon } from "react-native-elements";
import { colors } from "../static";
import { DashboardHeader } from "../components/BoardElements";
import { Toolbar } from "../components/ToolbarView";
import ActionSheet from "react-native-actionsheet";

export default class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoList: this.props.screenProps.data,
      scrollY: new Animated.Value(0)
    };
  }

  _showActionSheet = () => {
    this.ActionSheet.show();
  };

  actionList = ["添加作业", "取消"];

  _onPressActionSheet = index => {
    switch (index) {
      case 0:
        this._onAddHomework();
        break;
      default:
        break;
    }
  };

  _onAddHomework = () => {
    this.props.navigation.navigate("AddHomework");
  };

  _changeFinished = id => {
    let index = 0;
    let flag = false;
    for (let course of this.state.demoList) {
      for (let homework of course.data)
        if (homework.id === id) {
          homework.finished = !homework.finished;
          flag = true;
          break;
        }
      if (flag) {
        course.data = [...course.data];
      }
      index++;
    }
    this.setState({});
  };

  _renderCard = ({ item }) => {
    if (item.data == null || item.data.length === 0) return;
    return (
      <DashboardCard
        title={item.title}
        cid={item.cid}
        data={item.data}
        changeFinished={this._changeFinished}
        navigation={this.props.navigation}
      />
    );
  };

  render() {
    let animation = {
      onScroll: event => {
        let y = event.nativeEvent.contentOffset.y;
        this.state.scrollY.setValue(y);
      }
    };

    const opacityTip = this.state.scrollY.interpolate({
      inputRange: [-80, -40],
      outputRange: [1, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.hiddenTipContainer, { opacity: opacityTip }]}
        >
          <Text style={{ color: "#aaaaaa", fontSize: 16 }}>
            下拉以添加更多作业
          </Text>
        </Animated.View>
        <FlatList
          ListHeaderComponent={
            <DashboardHeader
              title="Week 3"
              subtitle={moment().format("dddd h:mm")}
              onClick={this._showActionSheet}
            />
          }
          onScrollEndDrag={event => {
            if (event.nativeEvent.contentOffset.y < -70) {
              this._onAddHomework();
            }
          }}
          {...animation}
          data={this.state.demoList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderCard}
        />
        <Toolbar
          scrollY={this.state.scrollY}
          title="Week 3"
          onClick={this._showActionSheet}
        />
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          options={this.actionList}
          cancelButtonIndex={1}
          onPress={this._onPressActionSheet}
        />
      </View>
    );
  }
}

class DashboardCard extends React.PureComponent {
  _toCourseDetail = () => {
    this.props.navigation.navigate("CourseDetail", { cid: this.props.cid });
  };

  _renderItem = ({ item }) => (
    <DashboardItem
      id={item.id}
      navigation={this.props.navigation}
      onPressItem={this.props.changeFinished}
      finished={item.finished}
      title={item.content}
    />
  );
  render() {
    return (
      <View style={styles.dashboardCardContainer}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.dashboardHeader}>
              <Text style={styles.dashboardCardTitle}>{this.props.title}</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end"
                }}
              >
                <Icon
                  name="md-more"
                  type="ionicon"
                  size={24}
                  color={colors.icon}
                />
              </View>
            </View>
          }
          extraData={this.props}
          data={this.props.data}
          keyExtractor={(item, index) => item.id}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

class DashboardItem extends React.PureComponent {
  _toHomeworkDetail = () => {
    this.props.navigation.navigate("HomeworkDetail", { id: this.props.id });
  };

  render() {
    let finished = this.props.finished;
    const iconType = finished ? "ionicon" : "font-awesome";
    const iconName = finished ? "ios-checkmark-circle" : "circle-thin";
    const decoration = finished
      ? { textDecorationLine: "line-through", color: "#DDDDDD" }
      : {};
    return (
      <TouchableOpacity
        onPress={() => this.props.onPressItem(this.props.id)}
        onLongPress={this._toHomeworkDetail}
      >
        <View style={styles.dashboardCardItem}>
          <Text style={[{ fontSize: 15, color: "#4a4a4a" }, decoration]}>
            {this.props.title}
          </Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Icon
              type={iconType}
              name={iconName}
              size={18}
              color={colors.rememberBlue}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1
  },
  dashboardCardTitle: {
    color: "#7a7a7a",
    fontSize: 18,
    fontWeight: "bold"
  },
  dashboardHeader: {
    marginBottom: 12,
    paddingHorizontal: 24,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#DDDDDD"
  },
  dashboardCardContainer: {
    marginVertical: 8,
    marginHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 0,
    shadowColor: "#cccccc",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2
  },
  dashboardCardItem: {
    flex: 1,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 39
  },
  hiddenTipContainer: {
    position: "absolute",
    top: 30,
    alignSelf: "center",
    height: 100
  }
});
