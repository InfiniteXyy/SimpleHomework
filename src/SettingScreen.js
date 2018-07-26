import React from "react";
import { View, Button, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { colors } from "./static";

export default class SettingScreen extends React.Component {
  static navigationOptions = {
    title: "设置"
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.settingTitleContainer}>
          <Text style={styles.settingTitle}>设置</Text>
        </View>
        {settings.map((s, i) => {
          return (
            <TouchableOpacity underlayColor="white" key={i}>
              <View  style={styles.settingItemContainer}>
              <Text style={styles.settingItem}>{s}</Text>
              </View>

            </TouchableOpacity >
          );
        })}
      </View>
    );
  }
}

const settings = ["登录", "主题", "捐助", "国际化", "关于"];

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff"
  },
  settingTitle: {
    fontSize: 33,
    fontWeight: "400",
    color: colors.primaryColor
  },
  settingTitleContainer: {
    height: 67,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 34,
    marginBottom: 7
  },
  settingItem: {
    fontSize: 18,
    color: "#6A6A6A",
    fontWeight: "400"
  },
  settingItemContainer: {
    height: 56,
    alignItems: "center",
    justifyContent: "center"
  }
});
