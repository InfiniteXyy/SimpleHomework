import React from 'react';
import { WebView, View } from 'react-native';
import propTypes from 'prop-types';
import { gStyles } from '../../global';
import StackHeader from '../../components/StackHeader';
export default class WebPage extends React.Component {
  static propTypes = {
    webUrl: propTypes.string.isRequired,
    back: propTypes.func.isRequired
  };

  render() {
    return (
      <View style={[gStyles.container, { backgroundColor: 'white' }]}>
        <StackHeader onPressLeft={this.props.back} />
        <WebView originWhitelist={['*']} source={{ uri: this.props.webUrl }} />
      </View>
    );
  }
}
