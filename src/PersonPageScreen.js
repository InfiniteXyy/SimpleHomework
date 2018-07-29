import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { colors, styles as s, urls } from "./static";

export default class ProfileScreen extends React.Component {
  render() {
    let screenProps = this.props.screenProps;
    console.log(screenProps);
    let me;
    for (let i of screenProps.profileData) {
      if (screenProps.myId === i.pid) {
        me = i;
      }
    }
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={s.leftButtonContainer}>
              <Icon
                name="ios-arrow-back"
                type="ionicon"
                size={25}
                color={colors.black}
              />
              <Text style={styles.title}>{me.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.profileHeader}>
          <Avatar large rounded source={{ uri: urls.avatar }} />
        </View>
        <View style={{ alignItems: "flex-start", marginTop: 8 }}>
          <View style={styles.profileDetailContainer}>
            <Icon
              name="md-school"
              type="ionicon"
              size={24}
              color={colors.icon}
            />
            <Text style={styles.listDetail}>{me.school}</Text>
          </View>
          <View style={styles.profileDetailContainer}>
            <Icon
              name="documents"
              type="entypo"
              size={24}
              color={colors.icon}
            />
            <Text style={styles.listDetail}>{me.jobTitle.join("/")}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mStyle = {
  profileHeader: {
    marginTop: 16
  },
  profileDetailContainer: {
    height: 31,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
};

const styles = { ...s, ...mStyle };
