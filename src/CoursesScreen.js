import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import { DashboardHeader } from "./components/BoardElements";
import { Icon } from "react-native-elements";

export default class CoursesScreen extends React.Component {
  static navigationOptions = {
    title: "课程"
  };

  onPress(key) {
    if (key === "+") {
      this.props.navigation.navigate("AddCourse");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <DashboardHeader title="2018" subtitle="~2019 at ECNU" />
        <FlatList
          contentContainerStyle={styles.list}
          data={demoCourses}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            let content =
              item !== "+" ? (
                <Text style={styles.courseTitle}>{item}</Text>
              ) : (
                <Icon name="plus" size={24} type="feather" color="gray" />
              );
            return (
              <TouchableOpacity onPress={() => this.onPress(item)}>
                <View style={styles.courseCard}>{content}</View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const demoCourses = [
  "计算机图形学",
  "移动应用开发",
  "数据库",
  "我的世界",
  "什么鬼",
  "学会烹饪",
  "+"
];

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
