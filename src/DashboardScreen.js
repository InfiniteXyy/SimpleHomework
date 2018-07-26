import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";
import { DashboardHeader } from "./components/BoardElements";

class DashboardCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  _changeStatus(key) {
    let temp = this.state.data;
    temp[key].finished = !temp[key].finished;
    this.setState({ data: temp });
  }

  render() {
    return (
      <View style={styles.dashboardCardContainer}>
        <Text style={styles.dashboardCardTitle}>{this.props.title}</Text>
        {this.state.data.map((u, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => this._changeStatus(i)}>
              <View style={styles.dashboardCardItem}>
                <Text
                  style={
                    u.finished
                      ? { textDecorationLine: "line-through", color: "#DDDDDD" }
                      : {}
                  }
                >
                  {u.content}
                </Text>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Icon
                    type={u.finished ? "ionicon" : "font-awesome"}
                    name={u.finished ? "ios-checkmark-circle" : "circle-thin"}
                    size={18}
                    color="#FFAFAF"
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
export default class DashboardScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <DashboardHeader title="Week 3" subtitle="星期五 9:32" />
          <DashboardCard title="机器学习" data={demoList[0]} />
          <DashboardCard title="计算机视觉" data={demoList[1]} />
        </View>
      </ScrollView>
    );
  }
}

const demoList = [
  [
    { finished: true, content: "做一张卷子" },
    { finished: false, content: "整理房间" },
    { finished: false, content: "做大扫除" }
  ],
  [
    { finished: true, content: "做张卷子" },
    { finished: false, content: "整理房间" },
    { finished: true, content: "做大扫除" }
  ]
];

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff"
  },
  dashboardCardTitle: {
    color: "#6200EE",
    fontSize: 18,
    marginBottom: 9,
    marginLeft: 16,
    marginTop: 9
  },
  dashboardCardContainer: {
    marginLeft: 36,
    marginRight: 36,
    paddingBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 26,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.24,
    shadowRadius: 2,
    elevation: 1
  },
  dashboardCardItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    height: 39
  }
});
