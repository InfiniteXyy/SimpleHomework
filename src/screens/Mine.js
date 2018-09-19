import React from 'react';
import { View, TouchableWithoutFeedback, TouchableHighlight, Text, StyleSheet, FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { routeNames, gStyles, themeColor } from '../global';
import { profileData } from '../global/DemoServer';

const links = [
  { title: '主页', navigate: routeNames.personPage },
  { title: '归档', navigate: routeNames.archivePage },
  { title: '周报告', navigate: routeNames.weekPage },
  { title: '设置', navigate: routeNames.setting }
];

export default class Mine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      me: profileData.find(item => item.pid === this.props.screenProps.userId)
    };
  }

  to = (where, params) => () => {
    this.props.navigation.navigate(where, params);
  };

  render() {
    let me = this.state.me;

    return (
      <View style={gStyles.container}>
        <TouchableWithoutFeedback onPress={this.to(routeNames.profileSetting, { me: me })}>
          <View style={styles.profileContainer}>
            <Avatar large rounded source={{ uri: me.avatar }} />
            <View style={{ marginLeft: 32 }}>
              <Text style={styles.profileTitle}>{me.name}</Text>
              <Text style={styles.profileSubtitle}>查看和编辑个人资料</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <FlatList
          data={links}
          renderItem={({ item, index }) => {
            return (
              <TouchableHighlight onPress={this.to(item.navigate, { me: me })} underlayColor={themeColor.underlayColor}>
                <ListItem title={item.title} containerStyle={[gStyles.listContainer]} />
              </TouchableHighlight>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    marginVertical: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 32
  },

  profileTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: themeColor.primaryText
  },
  profileSubtitle: {
    marginTop: 8,
    fontSize: 16,
    color: themeColor.secondaryText
  }
});
