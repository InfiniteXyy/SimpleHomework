import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import propTypes from 'prop-types';

import { themeColor } from '../global';

export default class BottomModalHeader extends React.PureComponent {
  static propTypes = {
    onPressRight: propTypes.func.isRequired,
    onPressLeft: propTypes.func.isRequired,
    title: propTypes.string.isRequired,
    rightTitle: propTypes.string,
    leftTitle: propTypes.string,
    leftType: propTypes.oneOf(['icon', 'text'])
  };

  static defaultProps = {
    rightTitle: '保存',
    leftType: 'icon'
  };

  render() {
    let { onPressRight, title, rightTitle } = this.props;
    return (
      <View style={styles.bottomHeader}>
        {this.renderLeft()}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.bottomTitle}>{title}</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={onPressRight}>
            <Text style={styles.bottomButton}>{rightTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderLeft = () => {
    let leftContent =
      this.props.leftType === 'icon' ? (
        <TouchableOpacity onPress={this.props.onPressLeft}>
          <Icon
            containerStyle={{ alignSelf: 'flex-start' }}
            name="ios-arrow-back"
            type="ionicon"
            size={24}
            color={themeColor.secondaryText}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={this.props.onPressLeft}>
          <Text style={styles.bottomButtonRed}>{this.props.leftTitle}</Text>
        </TouchableOpacity>
      );
    return <View style={{ flex: 1, justifyContent: 'flex-end' }}>{leftContent}</View>;
  };
}
const styles = {
  bottomHeader: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderBottomColor: '#b2b2b2',
    borderBottomWidth: 0.5
  },
  bottomTitle: {
    fontSize: 19,
    color: themeColor.primaryText,
    fontWeight: 'bold'
  },
  bottomButton: {
    fontSize: 16,
    color: themeColor.primaryColor,
    fontWeight: '500'
  },
  bottomButtonRed: {
    fontSize: 16,
    color: themeColor.redText,
    fontWeight: '500'
  }
};
