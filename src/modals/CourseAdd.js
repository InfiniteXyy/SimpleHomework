import React from "react";
import { View, Button, StyleSheet, Text, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../static";
import {
  ModalTitle,
  ModalIcon,
  ModalMoreHint
} from "../components/ModalElements";
import { TextField } from "react-native-material-textfield";

export default class CourseAdd extends React.Component {
  render() {
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
        <ModalTitle title="创建新的课程" />
        <View style={{ width: 285, marginTop: 48 }}>
          <TextField label="这节课叫..." baseColor="#979797" />
        </View>
        <ModalMoreHint />
        <View style={styles.buttonGroup}>
          <ModalIcon name="check" type="feather" color={colors.blue} />
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
  buttonGroup: {
    marginTop: 190,
  }
});
