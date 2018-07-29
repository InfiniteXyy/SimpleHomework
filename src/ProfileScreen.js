import React from 'react'
import { Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { styles, urls, colors } from './static'

const links = [
  {title: '主页', navigate: 'homepage'},
  {title: '设置', navigate: 'SettingScreen'}
]

export default class ProfileScreen extends React.Component {
  _toPage = (dest) => {
    this.props.navigation.navigate(dest)
  }

  render () {
    return (
      <View style={styles.simpleContainer}>
        <View style={styles.profileHeaderContainer}>
          <Avatar
            large
            rounded
            source={{
              uri: urls.avatar
            }}
          />
          <View style={{marginLeft: 32}}>
            <Text style={styles.profileTitle}>InfiniteX</Text>
            <Text style={styles.profileSubtitle}>查看和编辑个人资料</Text>
          </View>
        </View>
        <View style={{marginTop: 45, flex: 1}}>
          {
            links.map((item, index) =>
              (<ListItem title={item.title} onPress={() => this._toPage(item.navigate)}
                         containerStyle={styles.listContainer} underlayColor={colors.rememberBlue} key={index}/>))
          }
        </View>
      </View>
    )
  }
}
