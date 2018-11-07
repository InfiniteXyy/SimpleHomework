import React from 'react';
import { View, Text } from 'react-native';
import { gStyles, themeColor } from '../global';

export default class SignIn extends React.Component {
  state = {
    location: ''
  };
  componentDidMount() {
    navigator.geolocation.requestAuthorization();
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ location: `latitude: ${position.coords.latitude}\nlongitue: ${position.coords.longitude}` });
    });
  }
  render() {
    return (
      <View style={gStyles.container}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: themeColor.primaryText }}>{this.state.location}</Text>
      </View>
    );
  }
}
