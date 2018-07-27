import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { DashboardHeader } from "./components/BoardElements";
import { Icon } from "react-native-elements";

export default class CoursesScreen extends React.Component {
  onPress(item) {
    if (item.title === "+") {
      this.props.navigation.navigate("AddCourse");
    } else {
      this.props.navigation.navigate("CourseDetail", { cid: item.cid });
    }
  }

  __renderCourse = ({ item }) => {
    let content =
      item.title !== "+" ? (
        <Text style={styles.courseTitle}>{item.title}</Text>
      ) : (
        <Icon name="plus" size={24} type="feather" color="gray" />
      );
    return (
      <TouchableOpacity onPress={() => this.onPress(item)}>
        <View style={styles.courseCard}>{content}</View>
      </TouchableOpacity>
    );
  };

  render() {
    let demoCourses = this.props.screenProps.data.map(i => i);
    demoCourses.push({ title: "+" });
    return (
      <View style={styles.container}>
        <DashboardHeader title="2018" subtitle="~2019 at ECNU" />
        <FlatList
          contentContainerStyle={styles.list}
          data={demoCourses}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.__renderCourse}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  courseCard: {
    backgroundColor: "#fff",
    margin: 13,
    width: 143,
    height: 62,
    borderRadius: 4,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#CCCCCC",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.0,
    shadowRadius: 2,
    elevation: 1
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#717171"
  }
});
