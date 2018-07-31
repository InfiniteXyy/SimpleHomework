import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon, ListItem } from "react-native-elements";
import { colors, styles } from "../static";
import { StackHeader } from "../components/StackElements";

const options = [
  { title: "更换头像", key: "avatar" },
  { title: "昵称", key: "name" },
  { title: "学校", key: "school" },
  { title: "职业", key: "jobTitle" }
];

export default class ProfileScreen extends React.Component {
  _keyToStr = (me, key) => {
    if (key === "jobTitle") return me[key].join("/");
    return me[key];
  };

  _changeProp = (me, key) => {
    alert("change " + key);
  };

  render() {
    let screenProps = this.props.screenProps;
    let me = screenProps.me;
    return (
      <View style={styles.simpleContainer}>
        <StackHeader
          leftTitle="完善资料"
          rightTitle="保存"
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <View style={{ marginTop: 45, flex: 1 }}>
          {options.map((item, index) => (
            <ListItem
              title={item.title}
              containerStyle={styles.listContainer}
              onPress={() => this._changeProp(me, item.key)}
              underlayColor={colors.rice}
              key={index}
              rightTitle={this._keyToStr(me, item.key)}
            />
          ))}
        </View>
      </View>
    );
  }
}
