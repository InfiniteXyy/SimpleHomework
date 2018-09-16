import React from 'react';
import { View, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import ScrollableTabView from '@bam.tech/react-native-scrollable-tab-view';
import { gStyles } from '../../global';
import StackHeader from '../../components/StackHeader';
import CourseHistory from './CourseHistory';
import CourseNews from './CourseNews';
import CourseGroup from './CourseGroup';
import WebPage from '../modals/WebPage';
import TabBar from '../../components/TabBar';
export default class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: props.navigation.getParam('course'),
      webInfo: { visible: false }
    };
  }

  setWebUrl = (url, title) => {
    this.setState({ webInfo: { webUrl: url, webTitle: title, visible: true } });
  };

  render() {
    let modalProps = {
      visible: this.state.webInfo.visible,
      style: { flex: 1, margin: 0 },
      animationType: 'slide'
    };
    return (
      <View style={gStyles.container}>
        <StackHeader leftTitle={this.state.course.title} onPressLeft={() => this.props.navigation.goBack()} />
        <ScrollableTabView renderTabBar={() => <TabBar />}>
          <CourseHistory tabLabel="详情" course={this.state.course} />
          <CourseNews tabLabel="动态" urlCallback={this.setWebUrl} course={this.state.course} />
          <CourseGroup tabLabel="群组" course={this.state.course} />
        </ScrollableTabView>
        <Modal {...modalProps}>
          <WebPage webInfo={this.state.webInfo} back={() => this.setState({ webInfo: { visible: false } })} />
        </Modal>
      </View>
    );
  }
}
