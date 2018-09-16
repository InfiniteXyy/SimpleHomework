import React from 'react';
import { View, FlatList, Text, Animated } from 'react-native';
import { gStyles, themeColor } from '../../global';
import propTypes from 'prop-types';
import CourseNewsSelectPageItem from './CourseNewsSelectPageItem';
import StackToolbarView from '../../components/StackToolbarView';
import { Icon, SearchBar } from 'react-native-elements';
import { fetchRSSList } from '../../global/utils';
import uuid from 'uuid';

export default class CourseNewsSelectPage extends React.Component {
  static propTypes = {
    back: propTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      rssList: []
    };
  }

  componentDidMount() {
    fetchRSSList(results => {
      this.setState({ rssList: results.data });
    });
  }

  render() {
    return (
      <View style={gStyles.container}>
        <StackToolbarView title={'添加新闻源'} handleBack={this.props.back} />
        <View style={styles.container}>{this.renderList()}</View>
      </View>
    );
  }
  renderHeader = () => {
    let searchBarProp = {
      containerStyle: { backgroundColor: themeColor.backgroundColor, borderTopWidth: 0, borderBottomWidth: 0 },
      inputStyle: { backgroundColor: '#ececed' },
      lightTheme: true,
      round: true,
      cancelButtonTitle: 'Cancel',
      placeholder: '搜索'
    };
    return (
      <View style={{ marginHorizontal: 12, marginVertical: 16 }}>
        <SearchBar {...searchBarProp} />
      </View>
    );
  };

  renderList = () => {
    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        data={this.state.rssList}
        renderItem={({ item, index }) => <CourseNewsSelectPageItem item={item} />}
        keyExtractor={item => uuid.v4()}
      />
    );
  };
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: themeColor.backgroundColor
  },
  title: {
    fontSize: 38,
    color: themeColor.primaryText,
    fontWeight: 'bold'
  },
  subtitle: {
    marginTop: 12,
    fontSize: 18,
    color: themeColor.secondaryText
  },
  headerContainer: {
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 30
  }
};
