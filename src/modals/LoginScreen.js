import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { colors, styles } from "../static";
import { Icon, Button } from "react-native-elements";
import { TextField } from "react-native-material-textfield";

export default class LoginScreen extends React.Component {
  _toRegister = () => {
    this.props.navigation.navigate("Register");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modalClose}>
          <Icon
            size={24}
            name="close"
            color={colors.icon}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <Text style={styles.bigBlueTitle}>欢迎</Text>
        <View style={{ width: 285, marginTop: 16 }}>
          <TextField label="Email" keyboardType="email-address"/>
          <TextField label="Password" textContentType="password" secureTextEntry/>
          <Button
            title="登录"
            color={colors.primaryColor}
            backgroundColor="white"
            borderRadius={27}
            fontWeight="800"
            buttonStyle={{
              marginTop: 97,
              width: 148,
              height: 56,
              borderColor: colors.primaryColor,
              borderWidth: 2.0,
              alignSelf: "center"
            }}
          />

          <View style={styles.moreOption}>
            <Text style={{ fontSize: 14, color: colors.gray }}>
              还没有账号？
            </Text>
            <TouchableOpacity onPress={this._toRegister}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.primaryColor,
                  marginLeft: 3
                }}
              >
                立即注册
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
