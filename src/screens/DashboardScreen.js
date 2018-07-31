import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import moment from "moment";

import { Icon } from "react-native-elements";
import { DashboardHeader } from "../components/BoardElements";
import { colors } from "../static";

export default class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoList: this.props.screenProps.data
    };
  }

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

  render() {
    return (
      <View style={styles.container}>
        <DashboardHeader
          title="Week 3"
          subtitle={moment().format("dddd h:mm")}
          onClick={this._onAddHomework}
        />
        <View style={styles.hiddenTipContainer}>
          <Text style={{color: "#aaaaaa",fontSize: 16}}>下拉以添加更多作业</Text>
        </View>

        <FlatList
          onScrollEndDrag={event => {
            if (event.nativeEvent.contentOffset.y < -70) {
              this._onAddHomework();
            }
          }}
          data={this.state.demoList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
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
          }}
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
    const textStyle = finished
      ? { textDecorationLine: "line-through", color: "#DDDDDD" }
      : {};
    return (
      <TouchableOpacity
        onPress={() => this.props.onPressItem(this.props.id)}
        onLongPress={this._toHomeworkDetail}
      >
        <View style={styles.dashboardCardItem}>
          <Text style={textStyle}>{this.props.title}</Text>
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
    color: "#4A4A4A",
    fontSize: 18,
    fontWeight: "500"
  },
  dashboardHeader: {
    marginBottom: 12,
    paddingHorizontal: 30,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#DDDDDD"
  },
  dashboardCardContainer: {
    marginTop: 16,
    paddingBottom: 20,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 0,
    shadowColor: "#cccccc",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1
  },
  dashboardCardItem: {
    flex: 1,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    height: 39
  },
  hiddenTipContainer: {
    position: "absolute",
    top: 150,
    alignSelf: "center",
    height: 100,
  }
});
