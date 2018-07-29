import React from "react";
import { View, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import { colors, styles } from "../static";
import { Dropdown } from "react-native-material-dropdown";
import { DatePickerDialog } from "react-native-datepicker-dialog";
import {
  ModalTitle,
  ModalIcon,
  ModalMoreHint
} from "../components/ModalElements";

export default class HomeworkAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      deadline: new Date()
    };
  }
  //TODO: 完成 3 个函数
  _showCamera = () => {
    alert("相机购买中");
  };
  _showCalendar = () => {
    this.refs.dateDialog.open({ date: new Date(), maxDate: new Date() });
  };
  _clickSubmit = () => {
    alert(this.state.content);
  };

  _onDeadlineDatePicked = date => {
    this.setState({
      deadline: date
    });
  };

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
        <View style={styles.addHomeworkCard}>
          <TextInput
            style={{ color: colors.black, fontSize: 15 }}
            multiline
            placeholder="Notes..."
            placeholderTextColor={colors.gray}
            value={this.state.content}
            onChangeText={text => this.setState({ content: text })}
          />
        </View>
        <ModalMoreHint />
        <View style={{ marginTop: 72, flexDirection: "row" }}>
          <ModalIcon
            name="camera"
            type="entypo"
            color={colors.green}
            onClick={this._showCamera}
          />
          <ModalIcon
            name="check"
            type="feather"
            color={colors.blue}
            onClick={this._clickSubmit}
          />
          <ModalIcon
            name="md-time"
            type="ionicon"
            color={colors.brown}
            onClick={this._showCalendar}
          />
        </View>
        <DatePickerDialog
          ref="dateDialog"
          onDatePicked={this._onDeadlineDatePicked.bind(this)}
        />
      </View>
    );
  }
}
