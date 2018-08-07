import React from "react";
import { FlatList, TouchableHighlight, View } from "react-native";
import StackHeader from "../../shared/StackHeader";
import gStyles from "../../global/styles";
import { ListItem } from "react-native-elements";

const options = [
  { title: "更换头像", key: "avatar" },
  { title: "昵称", key: "name" },
  { title: "学校", key: "school" },
  { title: "职业", key: "jobTitle" }
];

export default class PersonPage extends React.Component {
  toChangePage = key => {
    alert(key);
  };

  keyToStr = (me, key) => {
    if (key === "jobTitle") return me[key].join("/");
    return me[key];
  };

  render() {
    let me = this.props.navigation.getParam("me", null);
    if (!me) return <View />;
    return (
      <View style={gStyles.container}>
        <StackHeader
          leftTitle="完善资料"
          rightTitle="保存"
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <FlatList
          style={{ marginTop: 45 }}
          data={options}
          renderItem={({ item, index }) => {
            return (
              <TouchableHighlight
                onPress={() => this.toChangePage(item.key)}
                underlayColor={"#cccccc"}
              >
                <ListItem
                  title={item.title}
                  containerStyle={[gStyles.listContainer]}
                  rightTitle={this.keyToStr(me, item.key)}
                />
              </TouchableHighlight>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
