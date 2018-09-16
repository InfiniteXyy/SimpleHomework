import React from 'react';
import { View } from 'react-native';
import StackToolbarView from '../../components/StackToolbarView';
import { gStyles } from '../../global';

export default class OpenSourcePage extends React.Component {
  render() {
    return (
      <View style={gStyles.container}>
        <StackToolbarView title={'开源库'} handleBack={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
