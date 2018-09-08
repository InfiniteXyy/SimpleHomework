import React from 'react';
// import RN elements
import { Animated, FlatList, View } from 'react-native';
import { gStyles } from '../global';
import ActionSheet from 'react-native-actionsheet';
// import list items
import ToolbarView from '../components/ToolbarView';
import DashboardHeader from '../components/DashboardHeader';
import PullDownTip from '../components/PullDownTip';
import DashboardCard from './dashboard/DashboardCard';
// import modals
import HomeworkAdd from './modals/HomeworkAdd';
import MyBottomModal from '../components/MyBottomModal';
// import time library and database support
import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn';
import { realm } from '../global/realm';
// import demo
import { courseData } from '../global/DemoServer';
import EmptyView from '../components/EmptyView';

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekTitle: 'Week 3',
      dateTime: moment().format('dddd h:mm'),
      courses: [],
      scrollY: new Animated.Value(0), // for List Scroll Animation
      modalVisible: null
    };
    moment.updateLocale('zh-cn', momentLocale);
    this.actionList = [
      {
        title: '添加作业',
        type: 'normal',
        method: this.showAddHomeworkModal
      },
      {
        title: '使用demo',
        type: 'normal',
        method: this.useDemo
      },
      {
        title: '重置数据库',
        type: 'destructive',
        method: this.resetDatabase
      },
      { title: '取消', type: 'cancel', method: () => {} }
    ];
  }

  componentWillMount() {
    // update time automatically
    setTimeout(() => {
      this.timeUpdater = setInterval(() => {
        this.setState({ dateTime: moment().format('dddd h:mm') });
      }, 60000);
    }, 60000 - (new Date().valueOf() % 60000));
  }
  componentDidMount() {
    // fetch data from the database
    let courses = realm.objects('Course');
    this.setState({ courses });
  }

  componentWillUnmount() {
    clearInterval(this.timeUpdater);
  }

  render() {
    let actionSheetProps = {
      options: this.actionList.map(i => i.title),
      cancelButtonIndex: this.actionList.findIndex(i => i.type === 'cancel'),
      destructiveButtonIndex: this.actionList.findIndex(i => i.type === 'destructive'),
      onPress: index => this.actionList[index].method()
    };

    return (
      <View style={gStyles.container}>
        <PullDownTip content="下拉以添加更多作业" scrollY={this.state.scrollY} />
        <FlatList
          ref={'courseList'}
          onScroll={this.handleScroll}
          onScrollEndDrag={event => {
            if (event.nativeEvent.contentOffset.y < -70) {
              this.showAddHomeworkModal();
            }
          }}
          ListHeaderComponent={
            <DashboardHeader
              title={this.state.weekTitle}
              subtitle={this.state.dateTime}
              onClick={this.toggleActionSheet}
            />
          }
          keyExtractor={item => item.title}
          data={this.state.courses}
          renderItem={({ item }) => <DashboardCard data={item} />}
        />
        <ToolbarView title={this.state.weekTitle} scrollY={this.state.scrollY} onClick={this.toggleActionSheet} />
        <ActionSheet ref={o => (this.ActionSheet = o)} {...actionSheetProps} />
        <MyBottomModal
          isVisible={this.state.modalVisible === 1}
          toggleModal={this.toggleModal}
          child={<HomeworkAdd data={this.state.courses} />}
        />
      </View>
    );
  }

  toggleActionSheet = () => {
    this.ActionSheet.show();
  };

  toggleModal = () => {
    this.setState({ modalVisible: null });
  };

  showAddHomeworkModal = () => {
    this.setState({ modalVisible: 1 });
  };

  handleScroll = event => {
    this.state.scrollY.setValue(event.nativeEvent.contentOffset.y);
  };

  refreshUI = () => {
    this.forceUpdate();
  };

  useDemo = () => {
    realm.write(() => {
      realm.deleteAll();
      this.forceUpdate();
      for (const item of courseData) {
        let course = realm.create('Course', {
          title: item.title,
          color: item.color
        });
        for (let h of item.data) {
          realm.create('Homework', {
            content: h.content,
            finished: h.finished,
            archived: false,
            course: course
          });
        }
      }
      this.forceUpdate();
    });
  };

  resetDatabase = () => {
    realm.write(() => {
      realm.deleteAll();
    });
  };
}
