import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import propTypes from 'prop-types';
import { gStyles, themeColor } from '../../global';

export default class SettingItem extends React.Component {
  static propTypes = {
    leftIcon: propTypes.shape({ name: propTypes.string.isRequired, type: propTypes.string.isRequired }).isRequired,
    title: propTypes.string.isRequired,
    rightElement: propTypes.node,
    onPress: propTypes.func
  };

  static defaultProps = {
    onPress: () => {}
  };

  render() {
    let { leftIcon, title, onPress, rightElement } = this.props;
    return (
      <TouchableHighlight onPress={onPress} underlayColor={themeColor.underlayColor} disabled={Boolean(rightElement)}>
        <View style={styles.listItemContainer}>
          <Icon {...leftIcon} color={themeColor.activeIcon} size={22} containerStyle={styles.leftIcon} />
          <Text style={styles.title}>{title}</Text>
          {rightElement ? <View style={gStyles.rightIconContainer}>{rightElement}</View> : <View />}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  listItemContainer: {
    height: 50,
    backgroundColor: 'white',
    borderColor: '#eeeeee',
    borderTopWidth: 0.75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  leftIcon: {
    marginRight: 16
  },
  title: {
    color: themeColor.primaryText,
    fontSize: 14,
    fontWeight: '400'
  }
};
