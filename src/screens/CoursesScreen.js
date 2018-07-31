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
    if (item.title !== "+") {
      return (
        <TouchableOpacity onPress={() => this.onPress(item)}>
          <View style={[styles.courseCard, { height: 112 }]}>
            <Icon
              name="circle"
              size={24}
              type="font-awesome"
              color={item.color}
            />
            <Text
              style={{
                marginTop: 12,
                fontSize: 14,
                fontWeight: "bold",
                color: "#717171"
              }}
            >
              {item.title}
            </Text>
            <Text style={{ marginTop: 6, fontSize: 13, color: "#9b9b9b" }}>
              {item.data.length + " tasks"}
            </Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => this.onPress(item)}>
          <View style={[styles.courseCard, { height: 62 }]}>
            <Icon name="plus" size={24} type="feather" color="gray" />
          </View>
        </TouchableOpacity>
      );
    }
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
