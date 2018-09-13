import React from 'react';
import { WebView, View } from 'react-native';
import propTypes from 'prop-types';
import { gStyles } from '../../global';
import StackHeader from '../../components/StackHeader';
import StackToolbarView from '../../components/StackToolbarView';
export default class WebPage extends React.Component {
  static propTypes = {
    webInfo: propTypes.shape({ webUrl: propTypes.string, webTitle: propTypes.string }).isRequired,
    back: propTypes.func.isRequired
  };

  render() {
    let info = this.props.webInfo;
    return (
      <View style={[gStyles.container, { backgroundColor: 'white' }]}>
        <StackToolbarView handleBack={this.props.back} title={info.webTitle} />
        <WebView originWhitelist={['*']} source={{ uri: info.webUrl }} />
      </View>
    );
  }
}
