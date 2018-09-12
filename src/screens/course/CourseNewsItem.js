import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import propTypes from 'prop-types';
import moment from 'moment';
import { themeColor, gStyles } from '../../global';

class CourseNewsItem extends React.PureComponent {
  static propTypes = {
    item: propTypes.object.isRequired,
    urlCallback: propTypes.func.isRequired
  };

  render() {
    return (
      <TouchableHighlight
        underlayColor={themeColor.underlayColor}
        style={{ marginBottom: 6 }}
        onPress={() => this.props.urlCallback(this.props.item.url, this.props.item.source)}
      >
        <View style={styles.container}>
          {this.renderTop()}
          {this.renderContent()}
          {this.renderBottom()}
        </View>
      </TouchableHighlight>
    );
  }

  renderTop = () => {
    let item = this.props.item;
    let { auth, cover_imag_url, date } = item;
    let passedTime = moment(date * 1000)
      .startOf('minutes')
      .fromNow();
    return (
      <View style={styles.horizontalContainer}>
        <Avatar rounded source={{ uri: cover_imag_url }} avatarStyle={styles.avatarContainerStyle} />
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.title}>{auth + ' 发表了话题'}</Text>
          <Text style={styles.subtitle}>{passedTime}</Text>
        </View>
      </View>
    );
  };

  renderContent = () => {
    let item = this.props.item;
    let { public_abbr, title } = item;
    let summary = public_abbr.substr(0, 30).replace(/[\n\r*#]/g, '') + '…';

    return (
      <View style={{ marginTop: 12 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.topicSummary}>{summary}</Text>
      </View>
    );
  };

  renderBottom = () => {
    let { source } = this.props.item;
    let iconProp = {
      name: 'message',
      type: 'entypo',
      size: 16,
      color: '#dadada',
      containerStyle: { marginRight: 4 }
    };
    return (
      <View style={styles.bottomContainer}>
        <View style={styles.nodeContainer}>
          <Text style={styles.nodeTitle}>{source}</Text>
        </View>
        <View style={gStyles.rightIconContainer}>
          <Icon {...iconProp} />
          <Text style={styles.subtitle}>{400}</Text>
        </View>
      </View>
    );
  };
}

export default withNavigation(CourseNewsItem);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white'
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  horizontalContainer: {
    flexDirection: 'row'
  },
  avatarContainerStyle: {
    height: 37,
    width: 37
  },
  nodeContainer: {
    borderRadius: 2,
    paddingHorizontal: 10,
    height: 20,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nodeTitle: {
    color: themeColor.secondaryText,
    fontSize: 11
  },
  title: {
    color: themeColor.primaryText,
    fontSize: 14
  },
  subtitle: {
    marginTop: 2,
    color: themeColor.secondaryText,
    fontSize: 12
  },
  topicTitle: {
    color: themeColor.primaryText,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    textAlign: 'left'
  },
  topicSummary: {
    marginTop: 8,
    color: themeColor.secondaryText,
    fontSize: 14
  }
});
