import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { colors, styles as s, urls } from "../static";
import { groupData } from "../DemoServer";

export default class ProfileScreen extends React.Component {
  render() {
    let screenProps = this.props.screenProps;
    let me = screenProps.me;
    let groups = [];
    for (let i of me.groups) {
      for (let j of groupData) {
        if (j.gid === i) {
          groups.push(j);
        }
      }
    }

    return (
      <View style={styles.simpleContainer}>
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
        <ProfileTitle me={me} />
        <GroupDetail data={groups} />
        <ActivityDetail />
      </View>
    );
  }
}

class ProfileTitle extends React.PureComponent {
  render() {
    let me = this.props.me;
    return (
      <View
        style={{
          marginTop: 40,
          backgroundColor: "white",
          alignItems: "center",
          paddingBottom: 16
        }}
      >
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

class GroupDetail extends React.PureComponent {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>群组</Text>
        <View style={styles.groupContainer}>
          {this.props.data.map((item, index) => (
            <GroupButton color={item.color} title={item.title} key={index} />
          ))}
        </View>
        <ShowMore />
      </View>
    );
  }
}

class ActivityDetail extends React.PureComponent {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>活动</Text>
      </View>
    );
  }
}

class GroupButton extends React.PureComponent {
  render() {
    let color = this.props.color ? this.props.color : "skyblue";
    let title = this.props.title ? this.props.title : "unknown";
    return (
      <View style={[styles.groupBtn, { backgroundColor: color }]}>
        <Text style={{ fontSize: 14, color: "white", fontWeight: "500" }}>
          {title}
        </Text>
      </View>
    );
  }
}

class ShowMore extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: 16
        }}
      >
        <Text style={{ fontSize: 12, color: colors.gray }}>查看更多群组</Text>
        <Icon
          name="chevron-right"
          type="entypo"
          size={12}
          color={colors.gray}
        />
      </View>
    );
  }
}

const mStyle = {
  profileHeader: {
    marginTop: -32
  },
  profileDetailContainer: {
    height: 31,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  cardTitle: {
    fontSize: 16
  },
  groupContainer: {
    marginTop: 6,
    flexDirection: "row"
  },
  groupBtn: {
    marginRight: 16,
    marginTop: 3,
    width: 82,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  }
};

const styles = { ...s, ...mStyle };
