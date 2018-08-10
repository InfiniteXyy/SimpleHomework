import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import propTypes from "prop-types";
import { themeColor } from "../global";

export default class EmptyView extends React.PureComponent {
  static propTypes = {
    title: propTypes.string.isRequired,
    onClick: propTypes.func
  };

  static defaultProps = {
    onClick: () => {}
  };

  render() {
    return (
      <View style={styles.container}>
        {this.image()}
        {this.textGroup()}
      </View>
    );
  }

  image = () => {
    return (
      <View style={{ marginTop: 50, alignItems: "center" }}>
        <View style={styles.imageRec} />
        <Icon
          onPress={this.props.onClick}
          containerStyle={{ marginTop: -24 }}
          name={"add"}
          size={24}
          reverse
          color={themeColor.primaryColor}
        />
      </View>
    );
  };

  textGroup = () => {
    return (
      <View style={{ marginTop: 36, alignItems: "center" }}>
        <Text style={styles.title}>{this.props.title + "空空如也"}</Text>
        <Text style={styles.subtitle}>点击 + 添加更多</Text>
      </View>
    );
  };
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#9B9B9B",
    fontSize: 20,
    fontWeight: "500"
  },
  subtitle: {
    marginTop: 4,
    color: "#CACACA",
    fontSize: 16,
    fontWeight: "500"
  },
  imageRec: {
    height: 158,
    width: 133,
    backgroundColor: "white",
    borderWidth: 4,
    borderColor: themeColor.primaryColor
  }
};
