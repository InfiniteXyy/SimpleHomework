import React from "react";
import { View, Button, StyleSheet, Text, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../static";
import { Dropdown } from "react-native-material-dropdown";
import {
  ModalTitle,
  ModalIcon,
  ModalMoreHint
} from "../components/ModalElements";

export default class HomeworkAdd extends React.Component {
  render() {
    let data = this.props.screenProps.data.map(i => {
      return { value: i.title };
    });

    return (
      <View style={styles.container}>
        <View style={styles.modalClose}>
          <Icon
            size={24}
            name="close"
            color={colors.icon}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <ModalTitle title="添加新的作业" />
        <View style={{ width: 285, marginTop: 48 }}>
          <Dropdown
            data={data}
            fontSize={18}
            itemColor="#aaaaaa"
            selectedItemColor="#4A4A4A"
            baseColor="#979797"
            value="选择一个课程..."
            propsExtractor={({ props }, index) => props}
          />
        </View>
        <View style={styles.homeworkCard}>
          <Text style={{ color: colors.gray, fontSize: 14 }}>Notes</Text>
        </View>
        <ModalMoreHint />
        <View style={styles.buttonGroup}>
          <ModalIcon name="camera" type="entypo" color={colors.green} />
          <ModalIcon name="check" type="feather" color={colors.blue} />
          <ModalIcon name="md-time" type="ionicon" color={colors.brown} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: "center"
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
  buttonGroup: {
    marginTop: 72,
    flexDirection: "row"
  }
});
