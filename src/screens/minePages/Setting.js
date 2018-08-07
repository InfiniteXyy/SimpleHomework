import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import gStyles from "../../global/styles";
import StackHeader from "../../shared/StackHeader";
import { routeNames, themeColor } from "../../global";

const links = [
  { title: "登录", navigate: routeNames.login },
  { title: "主题", navigate: routeNames.theme },
  { title: "国际化", navigate: "" },
  { title: "反馈", navigate: "" },
  { title: "关于", navigate: "" }
];

export default class PersonPage extends React.Component {
  to = where => {
    this.props.navigation.navigate(where);
  };
  render() {
    return (
      <View style={gStyles.container}>
        <StackHeader
          leftTitle={"设置"}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <FlatList
          style={{ marginTop: 20 }}
          data={links}
          renderItem={this.renderOption}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
  renderOption = ({ item, index }) => {
    let marginTop = index === 0 ? "24%" : 0;
    return (
      <TouchableOpacity onPress={() => this.to(item.navigate)}>
        <View style={{ alignItems: "center", height: 56, marginTop }}>
          <Text
            style={{
              color: themeColor.primaryText,
              fontWeight: "400",
              fontSize: 18
            }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
}
