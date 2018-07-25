import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import {
  Card,
  CardAction,
  CardButton,
  CardContent,
  CardTitle
} from "react-native-material-cards";

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
      <View style={styles.dashboardHeader}>
        <Card>
          <CardTitle title="This is a title" subtitle="This is subtitle" />
          <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
          <CardAction separator={true} inColumn={false}>
            <CardButton onPress={() => {}} title="Push" color="blue" />
            <CardButton onPress={() => {}} title="Later" color="blue" />
          </CardAction>
        </Card>
      </View>
    );
  }
}
export default class DashboardScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DashboardHeader title="Week 3" subtitle="~2019 at ECNU" />
        <DashboardCard />
        <DashboardCard />
      </View>
    );
  }
}

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
  }
});
