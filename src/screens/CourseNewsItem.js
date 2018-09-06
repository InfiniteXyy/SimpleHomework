import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import propTypes from "prop-types";
import moment from "moment";

export default class CourseNewsItem extends React.PureComponent {
  static propTypes = {
    item: propTypes.object.isRequired
  };

  render() {
    let { item } = this.props;
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.author}</Text>
        <Text>{item.content}</Text>
      </View>
    );
  }
}
