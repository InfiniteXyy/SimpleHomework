import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

class DashboardHeader extends React.Component {
  render() {
    return (
      <View style={styles.dashboardHeader}>
        <Text style={styles.dashboardTitle}>{this.props.title}</Text>
        <Text style={styles.dashboardSubtitle}>{this.props.subtitle}</Text>
      </View>
    );
  }
}

class DashboardCard extends React.Component {
  render() {
    return (
      <Card containerStyle={styles.dashboardCardContainer}>
        <Text
          style={{
            color: "#6200EE",
            fontSize: 18,
            marginBottom: 9,
            marginLeft: 16,
            marginTop: 9
          }}
        >
          {this.props.title}
        </Text>
        {this.props.content.map((u, i) => {
          return (
            <View style={styles.dashboardCardItem} key={i}>
              <Text style={{ fontSize: 14 }}>{u.content}</Text>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Icon
                  type="ionicon"
                  name="ios-checkmark-circle"
                  size={18}
                  color="#FFAFAF"
                />;
              </View>
            </View>
          );
        })}
      </Card>
    );
  }
}
export default class DashboardScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <DashboardHeader title="Week 3" subtitle="星期五 9:32" />
          <DashboardCard title="机器学习" content={demoList[0]} />
          <DashboardCard title="计算机视觉" content={demoList[1]} />
        </View>
      </ScrollView>
    );
  }
}

const demoList = [
  [{ content: "做一张卷子" }, { content: "整理房间" }, { content: "做大扫除" }],
  [{ content: "做张卷子" }, { content: "整理房间" }, { content: "做大扫除" }],
  [{ content: "做张卷子" }, { content: "整理房间" }, { content: "做大扫除" }]
];

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff"
  },
  dashboardHeader: {
    height: 115,
    paddingLeft: 36,
    paddingTop: 18
  },
  dashboardTitle: {
    fontSize: 48,
    fontWeight: "400",
    color: "#9B9B9B"
  },
  dashboardSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#CCCCCC"
  },
  dashboardCardContainer: {
    marginLeft: 36,
    marginRight: 36,
    padding: 0
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
