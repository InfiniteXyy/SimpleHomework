import React from 'react';
import { View } from 'react-native';
import { gStyles } from '../../global';
import StackToolbarView from '../../components/StackToolbarView';

export default class Weeks extends React.Component {
  render() {
    return (
      <View style={gStyles.container}>
        <StackToolbarView title={'周报告'} handleBack={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
