import React from 'react';
import FlashMessage from 'react-native-flash-message/src/FlashMessage';
import { View } from 'react-native';
import AppRouter from './AppRouter';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '1'
    };
    console.ignoredYellowBox = ['Remote debugger'];
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppRouter screenProps={this.state} />
        <FlashMessage position="top" />
      </View>
    );
  }
}
