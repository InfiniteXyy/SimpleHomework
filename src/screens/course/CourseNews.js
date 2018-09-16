import React from 'react';
import { FlatList, View, Text } from 'react-native';
import propTypes from 'prop-types';
import CourseNewsItem from './CourseNewsItem';
import { fetchNewsById } from '../../global/utils';
import Modal from 'react-native-modal';
import CourseNewsSelectPage from './CourseNewsSelectPage';
import { Icon } from 'react-native-elements';
import { gStyles, themeColor } from '../../global';
import EmptyView from '../../components/EmptyView';

export default class CourseNews extends React.Component {
  static propTypes = {
    urlCallback: propTypes.func.isRequired,
    course: propTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = { newsList: [], modalVisible: false, refreshing: false };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    this.setState({ refreshing: true });
    let tempList = [];
    this.props.course.rssList.forEach((item, index) => {
      fetchNewsById(item, results => {
        tempList.push(...results.data);
        if (index === this.props.course.rssList.length - 1) {
          tempList.sort((a, b) => b.date - a.date);
          this.setState({ newsList: tempList, refreshing: false });
          this.forceUpdate();
        }
      });
    });
  };

  render() {
    let modalProps = {
      visible: this.state.modalVisible,
      style: { flex: 1, margin: 0, justifyContent: 'flex-start' },
      animationType: 'slide'
    };
    let mainView;
    if (this.props.course.rssList.length === 0)
      mainView = (
        <EmptyView subtitle={'请先添加一些订阅源'} button={'立即添加'} onClick={this.buildToggleModal(true)} />
      );
    else
      mainView = (
        <FlatList
          onRefresh={this.refresh}
          refreshing={this.state.refreshing}
          ListHeaderComponent={this.renderHeader()}
          data={this.state.newsList}
          renderItem={({ item }) => <CourseNewsItem item={item} urlCallback={this.props.urlCallback} />}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    return (
      <View style={{ flex: 1 }}>
        {mainView}
        <Modal {...modalProps}>
          <CourseNewsSelectPage back={this.buildToggleModal(false)} course={this.props.course} />
        </Modal>
      </View>
    );
  }

  renderHeader = () => {
    return (
      <View style={{ marginHorizontal: 16, height: 36, flexDirection: 'row', alignItems: 'center' }}>
        <Text>动态列表</Text>
        <View style={gStyles.rightIconContainer}>
          <Icon
            name="playlist-add"
            iconStyle={{ alignSelf: 'flex-end' }}
            color={themeColor.activeIcon}
            size={20}
            containerStyle={{ paddingLeft: 10, paddingVertical: 5 }}
            underlayColor={themeColor.backgroundColor}
            onPress={this.buildToggleModal(true)}
          />
        </View>
      </View>
    );
  };

  buildToggleModal = visible => {
    if (visible) return () => this.setState({ modalVisible: visible });
    else
      return needRefresh => {
        this.setState({ modalVisible: visible });
        if (needRefresh) this.refresh();
      };
  };
}
