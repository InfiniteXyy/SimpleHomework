import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { routeNames, themeColor, gStyles } from '../../global';
import StackHeader from '../../components/StackHeader';
import InputField from '../../components/InputField';

export default class Register extends React.Component {
  register = () => {
    alert('submit');
  };
  render() {
    return (
      <View style={gStyles.container}>
        <StackHeader onPressLeft={() => this.props.navigation.goBack()} />
        <Text style={styles.title}>注册</Text>
        <View style={styles.inputBoxContainer}>
          <InputField placeholder={'Email'} type={'profile'} />
          <InputField placeholder={'Password'} type={'password'} />
          <InputField placeholder={'Password Again'} type={'password'} />
          <Button
            backgroundColor={themeColor.primaryColor}
            buttonStyle={{ marginTop: 20, marginBottom: 45, width: 335 }}
            title={'提交'}
            onPress={this.register}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: themeColor.secondaryText }}>已经有账号了？</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(routeNames.login);
              }}
            >
              <Text style={{ color: themeColor.primaryText }}>立即登录</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginVertical: 56,
    fontSize: 48,
    color: themeColor.primaryColor
  },
  smallTip: {
    fontSize: 14,
    color: themeColor.secondaryText
  },
  inputBoxContainer: {
    alignSelf: 'center',
    flex: 1,
    width: 335,
    alignItems: 'center'
  },
  rightTip: {
    alignSelf: 'flex-end',
    color: themeColor.secondaryText
  },
  bottomContainer: {
    alignSelf: 'center',
    marginBottom: 16,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 335
  }
});
