import React from 'react';
import { View, Text } from 'react-native';
import { gStyles } from '../../global';
import StackToolbarView from '../../components/StackToolbarView';

export default class AboutPage extends React.Component {
  render() {
    return (
      <View style={gStyles.container}>
        <StackToolbarView title={'关于简记'} handleBack={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
