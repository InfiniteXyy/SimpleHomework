import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import propTypes from 'prop-types';
import moment from 'moment';
import realm from '../../global/realm';
import { themeColor, gStyles } from '../../global';
export default class CourseHistory extends React.Component {
  static propTypes = {
    course: propTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      homeworkNum: this.props.course.homeworkList.filtered('finished = false').length
    };
  }

  render() {
    return (
      <ScrollView>
        {this.renderDetail()}
        {this.renderHomeworkList()}
      </ScrollView>
    );
  }

  renderDetail = () => {
    let course = this.props.course;
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{course.title}</Text>
        <View style={{ height: 140 }} />
      </View>
    );
  };

  renderHomeworkList = () => {
    let course = this.props.course;
    let subtitle = '剩余 ' + this.state.homeworkNum + ' 项';
    return (
      <View style={styles.cardContainer}>
        <View style={{ flexDirection: 'row', marginBottom: 16 }}>
          <Text style={styles.title}>作业列表</Text>
          <View style={gStyles.rightIconContainer}>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
        {course.homeworkList.map(item => (
          <HomeworkItem homeworkItem={item} setCallback={this.changeHomeworkNum} key={item.id} />
        ))}
        <Text style={styles.textMore}>显示已完成作业</Text>
      </View>
    );
  };

  changeHomeworkNum = () => {
    this.setState(prevState => {
      return { homeworkNum: this.props.course.homeworkList.filtered('finished = false').length };
    });
  };
}

class HomeworkItem extends React.Component {
  static propTypes = {
    homeworkItem: propTypes.object.isRequired,
    setCallback: propTypes.func.isRequired
  };
  render() {
    let item = this.props.homeworkItem;
    let deadline = item.deadline
      ? moment(item.deadline)
          .startOf('minutes')
          .fromNow()
      : '';
    let checkedIcon = item.finished ? 'check-box' : 'check-box-outline-blank';
    let bgColor = item.finished ? '#fafafa' : 'white';
    return (
      <TouchableOpacity onPress={this.setFinishStatus}>
        <View style={[styles.listCardContainer, { backgroundColor: bgColor }]}>
          <Icon name={checkedIcon} color={themeColor.activeIcon} />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.homeworkItemTitle}>{item.content}</Text>
            {deadline ? <Text style={styles.homeworkItemSubtitle}>{deadline}</Text> : <View />}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  setFinishStatus = () => {
    realm.write(() => {
      let finished = this.props.homeworkItem.finished;
      this.props.homeworkItem.finished = !finished;
      this.props.setCallback();
    });
  };
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    marginBottom: 10
  },
  listCardContainer: {
    marginHorizontal: 12,
    paddingHorizontal: 20,
    marginTop: 10,
    height: 85,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#CCCCCC',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1
  },
  title: {
    marginHorizontal: 26,
    fontWeight: '500',
    fontSize: 16,
    color: themeColor.primaryText
  },
  subtitle: {
    marginHorizontal: 26,
    fontWeight: '500',
    fontSize: 16,
    color: themeColor.secondaryText
  },
  homeworkItemTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: themeColor.primaryText
  },
  homeworkItemSubtitle: {
    marginTop: 8,
    fontSize: 14,
    color: themeColor.secondaryText
  },
  textMore: {
    marginTop: 32,
    alignSelf: 'center',
    fontSize: 14,
    color: themeColor.secondaryText
  }
});
