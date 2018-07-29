import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { styles, urls, colors } from "./static";

const links = [
  { title: "主页", navigate: "PersonPage" },
  { title: "设置", navigate: "Setting" }
];

export default class MineScreen extends React.Component {
  _toPage = dest => {
    this.props.navigation.navigate(dest);
  };

  render() {
    return (
      <View style={styles.simpleContainer}>
        <TouchableWithoutFeedback onPress={() => this._toPage("Profile")}>
          <View style={styles.profileHeaderContainer}>
            <Avatar large rounded source={{ uri: urls.avatar }} />
            <View style={{ marginLeft: 32 }}>
              <Text style={styles.profileTitle}>InfiniteX</Text>
              <Text style={styles.profileSubtitle}>查看和编辑个人资料</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={{ marginTop: 45, flex: 1 }}>
          {links.map((item, index) => (
            <ListItem
              title={item.title}
              onPress={() => this._toPage(item.navigate)}
              containerStyle={styles.listContainer}
              underlayColor={colors.rememberBlue}
              key={index}
            />
          ))}
        </View>
      </View>
    );
  }
}
