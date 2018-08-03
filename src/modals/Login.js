import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import gStyles from "../static/styles";
import StackHeader from "../shared/StackHeader";
import { routeNames, themeColor } from "../static";
import InputField from "../shared/InputField";
import { Button } from "react-native-elements";

export default class Login extends React.Component {
  login = () => {
    alert("login");
  };
  render() {
    return (
      <View style={gStyles.container}>
        <StackHeader onPressLeft={() => this.props.navigation.goBack()} />
        <Text style={styles.title}>欢迎</Text>
        contentContainerStyle=
        {styles.inputBoxContainer}
        <View style={styles.inputBoxContainer}>
          <InputField placeholder={"Username"} type={"profile"} />
          <InputField placeholder={"Password"} type={"password"} />
          <Text style={styles.rightTip}>忘记密码？</Text>
          <Button
            backgroundColor={themeColor.primaryColor}
            buttonStyle={{ marginTop: 20, marginBottom: 45, width: 335 }}
            title={"登录"}
            onPress={this.login}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: themeColor.secondaryText }}>
              还没有账号？
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(routeNames.register);
              }}
            >
              <Text style={{ color: themeColor.primaryText }}>立即注册</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    marginVertical: 72,
    fontSize: 48,
    color: themeColor.primaryColor
  },
  smallTip: {
    fontSize: 14,
    color: themeColor.secondaryText
  },
  inputBoxContainer: {
    alignSelf: "center",
    flex: 1,
    width: 335,
    alignItems: "center"
  },
  rightTip: {
    alignSelf: "flex-end",
    color: themeColor.secondaryText
  },
  bottomContainer: {
    alignSelf: "center",
    marginBottom: 16,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: 335
  }
});
