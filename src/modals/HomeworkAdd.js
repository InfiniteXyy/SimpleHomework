import React from "react";
import { View, Button, StyleSheet, Text, ScrollView } from 'react-native'
import { Icon } from "react-native-elements";
import { colors } from "../static";
import { Dropdown } from "react-native-material-dropdown";

export default class HomeworkAdd extends React.Component {
  render() {
    let data = [
      {
        value: "选择一个课程...",
        props: { disabled: true }
      },
      {
        value: "计算机网络"
      },
      {
        value: "网络安全导论"
      },
      {
        value: "哈哈之课"
      }
    ];

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.modalClose}>
            <Icon
              size={24}
              name="close"
              color={colors.icon}
              onPress={() => this.props.navigation.navigate("Main")}
            />
          </View>
          <Text style={styles.modalTitle}>添加新的作业</Text>
          <View style={{ width: 285, marginTop: 48 }}>
            <Dropdown
              data={data}
              fontSize={18}
              itemColor="#aaaaaa"
              selectedItemColor="#4A4A4A"
              baseColor="#979797"
              value="选择一个课程..."
              dropdownPosition={1}
              propsExtractor={({ props }, index) => props}
            />
          </View>
          <View style={styles.homeworkCard}>
            <Text style={{ color: colors.gray, fontSize: 14 }}>Notes</Text>
          </View>
          <View style={styles.moreOption}>
            <Icon name="plus" type="entypo" color={colors.gray} size={14} />
            <Text style={{ color: colors.gray, fontSize: 14, marginLeft: 6 }}>
              自定义更多选项
            </Text>
          </View>

          <View style={styles.buttonGroup}>
            <Icon
              style={styles.circleIcon}
              name="camera"
              type="entypo"
              color={colors.green}
              reverse
              size={24}
            />
            <Icon
              style={styles.circleIcon}
              name="check"
              type="feather"
              color={colors.primaryColor}
              reverse
              size={24}
            />
            <Icon
              style={styles.circleIcon}
              name="md-time"
              type="ionicon"
              color={colors.brown}
              reverse
              size={24}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: "center"
  },
  modalTitle: {
    marginTop: 17,
    fontSize: 20,
    color: "#4A4A4A"
  },
  modalClose: {
    marginTop: 14,
    marginRight: 21,
    alignSelf: "flex-end"
  },
  homeworkCard: {
    backgroundColor: "white",
    marginTop: 29,
    width: 285,
    height: 145,
    borderRadius: 6,
    shadowColor: "#aaaaaa",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.68,
    shadowRadius: 4,
    paddingHorizontal: 26,
    paddingVertical: 16
  },
  moreOption: {
    marginTop: 29,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonGroup: {
    marginTop: 72,
    flexDirection: "row"
  },
  circleIcon: {
    marginLeft: 28
  }
});
