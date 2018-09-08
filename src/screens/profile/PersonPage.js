import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { themeColor, gStyles } from '../../global';
import StackHeader from '../../components/StackHeader';

export default class PersonPage extends React.Component {
  render() {
    let me = this.props.navigation.getParam('me', null);
    if (!me) return <View />;
    return (
      <View style={gStyles.container}>
        <StackHeader leftTitle={me.name} onPressLeft={() => this.props.navigation.goBack()} />
        <View style={styles.headerContainer}>
          <Avatar large rounded source={{ uri: me.avatar }} />
          <Text style={styles.personTag}>{me.name}</Text>
          <Text style={styles.personTag}>{me.jobTitle.join('/')}</Text>
        </View>
        <View style={styles.activityContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 16
  },
  personTag: {
    marginTop: 6,
    fontSize: 15,
    color: themeColor.primaryText
  },
  activityContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 600
  }
});
