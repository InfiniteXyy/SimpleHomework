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
        <Icon
          onPress={this.props.onPressLeft}
          underlayColor={"transparent"}
          containerStyle={{ alignSelf: 'flex-start', paddingHorizontal: 20, paddingVertical: 10 }}
          name="ios-arrow-back"
          type="ionicon"
          size={24}
          color={themeColor.secondaryText}
        />
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
    paddingHorizontal: 20,
    fontSize: 16,
    color: themeColor.primaryColor,
    fontWeight: '500'
  },
  bottomButtonRed: {
    marginLeft: 20,
    fontSize: 16,
    color: themeColor.redText,
    fontWeight: '500'
  }
};
