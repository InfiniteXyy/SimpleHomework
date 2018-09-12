import React from 'react';
import { WebView, View } from 'react-native';
import propTypes from 'prop-types';
import { gStyles } from '../../global';
import StackHeader from '../../components/StackHeader';
import StackToolbarView from '../../components/StackToolbarView';
export default class WebPage extends React.Component {
  static propTypes = {
    webUrl: propTypes.string.isRequired,
    back: propTypes.func.isRequired,
    title: propTypes.string.isRequired
  };

  render() {
    return (
      <View style={[gStyles.container, { backgroundColor: 'white' }]}>
        <StackToolbarView handleBack={this.props.back} title={this.props.title}/>
        <WebView originWhitelist={['*']} source={{ uri: this.props.webUrl }} />
      </View>
    );
  }
}
