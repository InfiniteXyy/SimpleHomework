import React from 'react';
import { ScrollView, View, Text, Switch } from 'react-native';
import { colors, gStyles, routeNames, themeColor } from '../../global';
import StackToolbarView from '../../components/StackToolbarView';
import SettingItemGroup from './SettingItemGroup';

export default class PersonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nightMode: false
    };
  }

  render() {
    let basicOptions = {
      title: '基本设置',
      data: [
        {
          icon: { name: 'user', type: 'feather' },
          title: '账号与安全',
          subtitle: '',
          onPress: this.navigateBuilder(routeNames.login)
        },
        { icon: { name: 'award', type: 'feather' }, title: '学期设置', subtitle: '', navigate: routeNames.login }
      ]
    };

    let customOptions = {
      title: '自定义外观',
      data: [
        {
          icon: { name: 'moon', type: 'feather' },
          title: '夜间模式',
          subtitle: '',
          rightElement: <Switch onValueChange={this.switchNightMode} value={this.state.nightMode} />
        },
        {
          icon: { name: 'box', type: 'feather' },
          title: '主题',
          subtitle: '',
          onPress: this.navigateBuilder(routeNames.theme)
        }
      ]
    };

    let aboutOptions = {
      title: '其它',
      data: [
        {
          icon: { name: 'github', type: 'feather' },
          title: '开源库',
          onPress: this.navigateBuilder(routeNames.openSource)
        },
        {
          icon: { name: 'mail', type: 'feather' },
          title: '关于简记',
          onPress: this.navigateBuilder(routeNames.about)
        }
      ]
    };

    let optionGroups = [basicOptions, customOptions, aboutOptions];
    return (
      <View style={[gStyles.container, { backgroundColor: themeColor.backgroundColor }]}>
        <StackToolbarView handleBack={() => this.props.navigation.pop()} title={'设置'} />
        <ScrollView>
          {optionGroups.map((item, index) => (
            <SettingItemGroup options={item} key={index.toString()} />
          ))}
          <Text style={styles.versionText}>Version 0.0.1 alpha</Text>
        </ScrollView>
      </View>
    );
  }

  switchNightMode = mode => {
    this.setState({ nightMode: mode });
  };

  navigateBuilder = where => () => {
    this.props.navigation.navigate(where);
  };
}

const styles = {
  versionText: {
    fontSize: 13,
    color: themeColor.secondaryText,
    marginLeft: 16,
    marginTop: 7
  }
};
