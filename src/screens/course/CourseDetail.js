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
      webUrl: '',
      webTitle: ''
    };
  }

  setWebUrl = (url, title) => {
    this.setState({ webUrl: url, webTitle: title });
  };

  render() {
    let modalProps = {
      visible: this.state.webUrl !== '',
      style: { flex: 1, margin: 0 },
      animationType: 'slide'
    };
    return (
      <View style={gStyles.container}>
        <StackHeader leftTitle={this.state.course.title} onPressLeft={() => this.props.navigation.goBack()} />
        <ScrollableTabView renderTabBar={() => <TabBar />}>
          <CourseHistory tabLabel="详情" course={this.state.course} />
          <CourseNews tabLabel="动态" urlCallback={this.setWebUrl} />
          <CourseGroup tabLabel="群组" course={this.state.course} />
        </ScrollableTabView>
        <Modal {...modalProps}>
          <WebPage webUrl={this.state.webUrl} back={() => this.setState({ webUrl: '' })}  title={this.state.webTitle}/>
        </Modal>
      </View>
    );
  }
}
