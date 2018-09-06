import React from "react";
import { View, FlatList } from "react-native";
import CourseNewsItem from "./CourseNewsItem";

export default class CourseNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [
        { id: "1", title: "happy", content: "veHappy", author: "xyy", date: 0 },
        { id: "2", title: "sad", content: "verysad", author: "xyy", date: 0 },
        { id: "3", title: "waht", content: "sdfa", author: "sdaf", date: 0 }
      ]
    };
  }

  render() {
    return (
      <FlatList
        data={this.state.newsList}
        renderItem={({ item }) => <CourseNewsItem item={item} />}
        keyExtractor={item => item.id}
      />
    );
  }
}
