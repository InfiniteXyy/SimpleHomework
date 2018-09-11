import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
import { colors, themeColor } from '../global';

export default class EmptyView extends React.PureComponent {
  static propTypes = {
    subtitle: propTypes.string.isRequired,
    button: propTypes.string,
    onClick: propTypes.func
  };

  static defaultProps = {
    onClick: () => {}
  };

  render() {
    return (
      <View style={styles.container}>
        {this.header()}
        {this.bottom()}
      </View>
    );
  }

  header = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}>空空如也</Text>
        <Text style={styles.subtitle}>{this.props.subtitle}</Text>
      </View>
    );
  };

  bottom = () => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonTitle}>打开列表</Text>
      </View>
    );
  };
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: themeColor.primaryText,
    fontSize: 28,
    fontWeight: 'bold'
  },
  subtitle: {
    marginTop: 8,
    color: themeColor.secondaryText,
    fontSize: 14
  },
  buttonContainer: {
    marginTop: 60,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderBottomColor: colors.lightBlue,
    borderBottomWidth: 2
  },
  buttonTitle: {
    fontSize: 14,
    color: colors.lightBlue,
    fontWeight: "bold"
  }
};
