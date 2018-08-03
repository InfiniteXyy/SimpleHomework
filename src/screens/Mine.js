import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  FlatList
} from "react-native";
import { routeNames, gStyles, themeColor } from "../static";
import { Avatar, ListItem } from "react-native-elements";
import { profileData } from "../utils/DemoServer";
import DashboardHeader from "../shared/DashboardHeader";

const links = [
  { title: "主页", navigate: routeNames.personPage },
  { title: "设置", navigate: routeNames.setting }
];

export default class Mine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      me: profileData.find(item => item.pid === this.props.screenProps.userId)
    };
  }

  to = (where, params) => {
    this.props.navigation.navigate(where, params);
  };

  render() {
    let me = this.state.me;

    return (
      <View style={gStyles.container}>
        <TouchableWithoutFeedback
          onPress={() => this.to(routeNames.profileSetting)}
        >
          <View style={styles.profileContainer}>
            <Avatar large rounded source={{ uri: me.avatar }} />
            <View style={{ marginLeft: 32 }}>
              <Text style={styles.profileTitle}>{me.name}</Text>
              <Text style={styles.profileSubtitle}>查看和编辑个人资料</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <FlatList
          data={links}
          renderItem={({ item, index }) => {
            let marginTop = index === 0 ? 45 : 0;
            return (
              <ListItem
                title={item.title}
                onPress={() => this.to(item.navigate)}
                containerStyle={[
                  gStyles.listContainer,
                  { marginTop: marginTop }
                ]}
                underlayColor={themeColor.backgroundColor}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    marginTop: 51,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 32
  },

  profileTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: themeColor.primaryText
  },
  profileSubtitle: {
    marginTop: 8,
    fontSize: 16,
    color: themeColor.secondaryText
  }
});
