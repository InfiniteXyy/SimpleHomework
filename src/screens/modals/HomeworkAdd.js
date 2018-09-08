import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import moment from 'moment';
import { showMessage } from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message/src/FlashMessage';
import { themeColor } from '../../global';
import { realm } from '../../global/realm';
import MyTextInput from '../../components/MyTextInput';
import ActionSheet from 'react-native-actionsheet';
import BottomModalHeader from '../../components/BottomModalHeader';
import MyDatePicker from '../../components/MyDatePicker';

const df = date => moment(date).format('M月D日截止');

export default class HomeworkAdd extends React.Component {
  constructor(props) {
    super(props);
    let courses = props.data;
    this.state = {
      content: '',
      selectedCourse: null,
      courses,
      deadline: null,
      modalVisible: null
    };
    this.options = courses.map(item => item.title);
    this.options.push('取消');
    let windowWidth = Dimensions.get('window').width;
    let buttonColumns = Math.floor(windowWidth / 100);
    this.buttonWidth = (windowWidth - 24 * 2 - 12 * (buttonColumns - 1)) / buttonColumns;
  }

  goBack = () => {
    this.props.goBack();
  };

  selectCourse = index => {
    if (index !== this.options.length - 1) {
      this.setState({ selectedCourse: this.options[index] });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <BottomModalHeader onPressLeft={this.goBack} onPressRight={this.addHomework} title={'添加作业'} />
        <View style={{ marginHorizontal: 24 }}>
          <MyTextInput
            style={{
              fontSize: 36,
              color: themeColor.primaryText,
              marginTop: 20
            }}
            placeholder="作业标题..."
            returnKeyType="done"
            onChangeText={text => {
              this.setState({ content: text });
            }}
          />
          <View style={styles.buttonContainer}>{this.buttons.map(this.renderButton)}</View>
          <Text style={{ fontSize: 18, color: themeColor.primaryText }}>备注</Text>
          <TouchableWithoutFeedback>
            <View style={styles.tagButton}>
              <Text style={{ color: themeColor.secondaryText }}>点击添加</Text>
            </View>
          </TouchableWithoutFeedback>

          <ActionSheet
            title={'选择一门课程'}
            styles={{}} // for Android
            ref={o => (this.ActionSheet = o)}
            options={this.options}
            onPress={this.selectCourse}
            cancelButtonIndex={this.options.length - 1}
          />
        </View>
        <FlashMessage
          ref={o => {
            this.message = o;
          }}
          position={'left'}
          floating={true}
        />

        <MyDatePicker
          isVisible={this.state.modalVisible === 1}
          toggleModal={this.toggleModal}
          date={this.state.deadline}
          setDate={this.saveTimeAndClose}
        />
      </View>
    );
  }

  saveTimeAndClose = date => {
    this.setState({ deadline: date, modalVisible: null });
  };
  toggleModal = () => this.setState({ modalVisible: null });

  showCourseSelection = () => this.ActionSheet.show();

  showDatePicker = () => {
    this.setState({ modalVisible: 1 });
  };

  renderButton = (item, index) => {
    return (
      <TouchableOpacity onPress={item.onClick} key={index.toString()}>
        <View style={[styles.button, { width: this.buttonWidth }]}>
          <Icon {...item.icon} size={24} color={themeColor.activeIcon} />
          <Text
            style={{
              color: themeColor.activeIcon,
              marginTop: 12
            }}
          >
            {item.title()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  getCourseTitle = () => {
    return this.state.selectedCourse ? this.state.selectedCourse : '设置课程';
  };

  buttons = [
    {
      icon: { type: 'entypo', name: 'blackboard' },
      title: this.getCourseTitle,
      onClick: this.showCourseSelection
    },
    {
      icon: { type: 'material', name: 'access-time' },
      title: () => (this.state.deadline == null ? '设置截止时间' : df(this.state.deadline)),
      onClick: this.showDatePicker
    }
  ];

  addHomework = () => {
    let content = this.state.content.trim();
    if (content.length === 0) {
      this.message.showMessage({
        ref: 'myLocalFlashMessage',
        message: '输入错误！',
        description: '请输入作业标题...',
        type: 'warning'
      });
    } else {
      if (this.state.selectedCourse == null) {
        this.message.showMessage({
          message: '课程未设定！',
          description: '请先点击下方按钮设置课程',
          type: 'warning'
        });
      } else {
        let course = realm.objectForPrimaryKey('Course', this.state.selectedCourse);
        realm.write(() => {
          realm.create('Homework', {
            content,
            course,
            deadline: this.state.deadline
          });
          showMessage({
            message: course.title,
            description: '添加了新的作业',
            type: 'success'
          });
        });

        this.goBack();
      }
    }
  };
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#cccccc',
    shadowRadius: 10,
    elevation: 4,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    paddingBottom: 80,
    backgroundColor: themeColor.backgroundColor
  },
  buttonContainer: {
    marginVertical: 40,
    flexDirection: 'row'
  },
  button: {
    marginRight: 16,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: themeColor.inactiveIcon
  },
  tagButton: {
    marginTop: 16,
    height: 40,
    backgroundColor: 'white',
    borderStyle: 'dashed',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: themeColor.inactiveIcon,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
