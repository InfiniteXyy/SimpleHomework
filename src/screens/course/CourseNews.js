import React from 'react';
import { FlatList, View, Text } from 'react-native';
import propTypes from 'prop-types';
import CourseNewsItem from './CourseNewsItem';
import { fetchNews } from '../../global/utils';
import Modal from 'react-native-modal';
import WebPage from '../modals/WebPage';
import CourseNewsSelectPage from './CourseNewsSelectPage';
import { Icon } from 'react-native-elements';
import { gStyles, themeColor } from '../../global';

export default class CourseNews extends React.Component {
  static propTypes = {
    urlCallback: propTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = { newsList: [], modalVisible: false };
  }

  componentDidMount() {
    fetchNews('news', result => {
      this.setState({ newsList: result.data });
    });
  }

  render() {
    let modalProps = {
      visible: this.state.modalVisible,
      style: { flex: 1, margin: 0, justifyContent: 'flex-start' },
      animationType: 'slide'
    };
    return (
      <View>
        <FlatList
          ListHeaderComponent={this.renderHeader()}
          data={this.state.newsList}
          renderItem={({ item }) => <CourseNewsItem item={item} urlCallback={this.props.urlCallback} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <Modal {...modalProps}>
          <CourseNewsSelectPage back={this.toggleModal} />
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
            underlayColor={themeColor.backgroundColor}
            onPress={() => this.setState({ modalVisible: true })}
          />
        </View>
      </View>
    );
  };

  toggleModal = () => {
    this.setState({ modalVisible: false });
  };
}
