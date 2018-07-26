import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { DashboardHeader } from "./components/BoardElements";
import { Icon } from "react-native-elements";

export default class CoursesScreen extends React.Component {
  static navigationOptions = {
    title: "课程"
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <DashboardHeader title="2018" subtitle="~2019 at ECNU" />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              paddingLeft: 27
            }}
          >
            {demoCourses.map((c, i) => {
              if (c === "+")
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => this.props.navigation.navigate("AddCourse")}
                  >
                    <View style={styles.courseCard}>
                      <Icon name="plus" size={24} type="feather" color="gray" />
                    </View>
                  </TouchableOpacity>
                );
              return (
                <TouchableOpacity key={i}>
                  <View style={styles.courseCard}>
                    <Text style={styles.courseTitle}>{c}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
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
    backgroundColor: "#fff"
  },
  courseCard: {
    marginRight: 30,
    backgroundColor: "#fff",
    width: 143,
    height: 62,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 21,
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
