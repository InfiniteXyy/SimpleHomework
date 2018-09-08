import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import propTypes from 'prop-types';
import { colors } from '../global';

export default class InputField extends React.Component {
  static propTypes = {
    placeholder: propTypes.string,
    type: propTypes.oneOf(['profile', 'password']),
    autoFocus: propTypes.bool
  };
  static defaultProps = {
    type: 'profile',
    autoFocus: false
  };
  render() {
    let icon, inputOption;
    if (this.props.type === 'profile') {
      icon = {
        name: 'account-circle',
        type: 'material'
      };
      inputOption = {
        keyboardType: 'email-address'
      };
    } else {
      icon = {
        name: 'lock',
        type: 'material'
      };
      inputOption = {
        textContentType: 'password',
        secureTextEntry: true
      };
    }
    return (
      <View style={styles.container}>
        <Icon {...icon} iconStyle={{ marginHorizontal: 16 }} color={colors.gray} />
        <TextInput
          autoFocus={this.props.autoFocus}
          placeholder={this.props.placeholder}
          style={{ fontSize: 18, flex: 1 }}
          {...inputOption}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    width: 335,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: colors.gray,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
