import React from "react";
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity } from "react-native";
import propTypes from "prop-types";
import { themeColor } from "../global";
import { Calendar, CalendarList, LocaleConfig } from "react-native-calendars";
import moment from "moment";
import BottomModalHeader from "./BottomModalHeader";

const days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const months = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月"
];
export default class MyDatePicker extends React.Component {
  constructor(props) {
    super(props);
    let date = props.date ? props.date : new Date();
    this.state = {
      selectedDate: date,
      dateString: moment(date).format("YYYY-MM-DD")
    };
    LocaleConfig.locales["zh"] = {
      monthNames: months,
      monthNamesShort: months,
      dayNames: days,
      dayNamesShort: days
    };

    LocaleConfig.defaultLocale = "zh";
  }

  static propTypes = {
    isVisible: propTypes.bool.isRequired,
    toggleModal: propTypes.func.isRequired,
    setDate: propTypes.func.isRequired,
    date: propTypes.object
  };

  render() {
    let modalProps = {
      isVisible: this.props.isVisible,
      backdropOpacity: 0.38,
      animationInTiming: 500,
      animationOutTiming: 450,
      onBackdropPress: this.props.toggleModal,
      hideModalContentWhileAnimating: true,
      style: {
        flex: 1,
        justifyContent: "flex-end",
        margin: 0
      }
    };
    let selectedDay = {};
    selectedDay[this.state.dateString] = {
      selected: true,
      selectionColor: themeColor.primaryColor
    };

    return (
      <Modal {...modalProps}>
        <View style={styles.datePickerModal}>
          <BottomModalHeader
            onPressLeft={this.deleteAndBack}
            onPressRight={this.saveAndBack}
            title={"截止时间"}
            leftType={"text"}
            leftTitle={"删除"}
          />
          <Calendar
            monthFormat={"yyyy年M月"}
            markedDates={selectedDay}
            onDayPress={date =>
              this.setState({
                selectedDate: new Date(date.timestamp),
                dateString: date.dateString
              })
            }
            horizontal={true}
            pagingEnabled={true}
            hideExtraDays={false}
          />
        </View>
      </Modal>
    );
  }

  saveAndBack = () => {
    this.props.setDate(this.state.selectedDate);
  };

  deleteAndBack = () => {
    this.props.setDate(null);
  };
}

const styles = {
  datePickerModal: {
    shadowColor: "#cccccc",
    shadowRadius: 10,
    elevation: 4,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    backgroundColor: "white"
  }
};
