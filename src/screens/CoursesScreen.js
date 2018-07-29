import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { DashboardHeader } from "../components/BoardElements";
import { Icon } from "react-native-elements";
import { colors, styles } from "../static";

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
