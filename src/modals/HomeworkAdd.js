import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { colors, styles } from "../static";
import { Dropdown } from "react-native-material-dropdown";
import MyTextInput from "../components/MyTextInput"
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
      deadline: new Date(),
      selected: ""
    };
  }
  _onChooseCourse = (value, index, data) => {
    console.log(data[index]);
    this.setState({ selected: data[index] });
  };
  //TODO: 完成 3 个函数
  _showCamera = () => {
    alert("相机购买中");
  };
  _showCalendar = () => {
    this.refs.dateDialog.open({ date: new Date(), maxDate: new Date() });
  };

  _onChangeText = text => {
    this.setState({ content: text });
  };
  _clickSubmit = () => {
    console.log(this.state.selected.title + ": " + this.state.content);
    this.props.navigation.goBack();
  };

  _onDeadlineDatePicked = date => {
    this.setState({
      deadline: date
    });
  };

  render() {
    let data = this.props.screenProps.data;
    return (
      <View style={styles.simpleContainer}>
        <View style={styles.modalClose}>
          <Icon
            size={24}
            name="close"
            color={colors.icon}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <ModalTitle title="添加新的作业" />
        <View style={{ marginHorizontal: 45 }}>
          <Dropdown
            data={data}
            fontSize={18}
            itemColor="#aaaaaa"
            selectedItemColor="#4A4A4A"
            dropdownPosition={0}
            baseColor="#979797"
            value="选择一个课程..."
            onChangeText={this._onChooseCourse}
            valueExtractor={item => item.title}
            propsExtractor={({ props }, index) => props}
          />
          <MyTextInput placeholder="内容..."/>
        </View>
        <ModalMoreHint />
        <View
          style={{ alignSelf: "center", marginTop: 72, flexDirection: "row" }}
        >
          <ModalIcon
            name="camera"
            type="entypo"
            color={colors.green}
            onClick={this._showCamera}
          />
          <ModalIcon name="check" type="feather" onClick={this._clickSubmit} />
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
