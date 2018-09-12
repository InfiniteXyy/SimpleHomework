import React from 'react';
import { View, Text, StyleSheet, Animated, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import propTypes from 'prop-types';
import { themeColor, gStyles } from '../global';

export default class StackToolbarView extends React.Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    handleBack: propTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.toolbarContainer}>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <Icon
            name="ios-arrow-back"
            type="ionicon"
            color={themeColor.activeIcon}
            size={24}
            underlayColor={themeColor.backgroundColor}
            onPress={this.props.handleBack}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.toolbarTitle}>{this.props.title}</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbarContainer: {
    height: Platform.OS === 'ios' ? 44 : 56,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themeColor.backgroundColor,
    borderBottomColor: '#b2b2b2',
    borderBottomWidth: 0.5
  },
  toolbarTitle: {
    fontSize: 20,
    alignSelf: "center",
    color: themeColor.primaryText,
    fontWeight: '500'
  }
});
