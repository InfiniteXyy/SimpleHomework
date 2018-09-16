import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
import MySettingItem from './SettingItem';
import { colors, themeColor } from '../../global';

export default class SettingItemGroup extends React.Component {
  static propTypes = {
    options: propTypes.shape({ title: propTypes.string, data: propTypes.arrayOf(propTypes.object) }).isRequired
  };

  render() {
    return (
      <View style={styles.groupContainer}>
        <Text style={styles.groupHeader}>{this.props.options.title}</Text>
        {this.props.options.data.map(item => {
          return (
            <MySettingItem
              leftIcon={item.icon}
              title={item.title}
              key={item.title}
              rightElement={item.rightElement}
              onPress={item.onPress}
            />
          );
        })}
      </View>
    );
  }
}

const styles = {
  groupContainer: {
    marginTop: 21,
    borderBottomWidth: 0.75,
    borderBottomColor: '#eeeeee'
  },
  groupHeader: {
    fontSize: 14,
    color: colors.darkerGray,
    marginLeft: 16,
    marginBottom: 10
  }
};
