import React from 'react';
import { Text, Animated, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import { themeColor } from '../global';

export default class PullDownTip extends React.PureComponent {
  static propTypes = {
    content: propTypes.string.isRequired,
    scrollY: propTypes.object.isRequired,
    inputRange: propTypes.arrayOf(propTypes.number)
  };

  static defaultProps = {
    inputRange: [-80, -40]
  };

  render() {
    const opacityTip = this.props.scrollY.interpolate({
      inputRange: this.props.inputRange,
      outputRange: [1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true
    });
    return (
      <Animated.View style={[styles.container, { opacity: opacityTip }]}>
        <Text style={{ color: themeColor.secondaryText, fontSize: 16 }}>下拉以添加更多作业</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    alignSelf: 'center',
    height: 100
  }
});
