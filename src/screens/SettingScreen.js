import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors, styles } from "../static";
import { Icon } from "react-native-elements";

export default class SettingScreen extends React.Component {
  _handlePress(i) {
    let dest = "";
    switch (i) {
      case 0:
        dest = "Login";
        break;
      case 1:
        dest = "ThemeChoose";
        break;
      default:
        break;
    }
    this.props.navigation.navigate(dest);
  }

  render() {
    return (
      <View style={styles.simpleContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles.leftButtonContainer}>
              <Icon
                name="ios-arrow-back"
                type="ionicon"
                size={25}
                color={colors.black}
              />
              <Text style={styles.title}>设置</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 40 }}>
          {settings.map((s, i) => {
            return (
              <TouchableOpacity
                underlayColor="white"
                key={i}
                onPress={() => this._handlePress(i)}
              >
                <View style={styles.settingItemContainer}>
                  <Text style={styles.settingItem}>{s}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const settings = ["登录", "主题", "清空缓存", "国际化", "关于"];
