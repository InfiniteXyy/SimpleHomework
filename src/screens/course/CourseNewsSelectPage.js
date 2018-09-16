import React from 'react';
import { View, FlatList, Text, Animated } from 'react-native';
import { gStyles, themeColor } from '../../global';
import propTypes from 'prop-types';
import CourseNewsSelectPageItem from './CourseNewsSelectPageItem';
import StackToolbarView from '../../components/StackToolbarView';
import { Icon, SearchBar } from 'react-native-elements';
import { arrayEquals, debounce, fetchRSSList } from '../../global/utils';

export default class CourseNewsSelectPage extends React.Component {
  static rssList = [];
  static propTypes = {
    back: propTypes.func.isRequired,
    course: propTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this._sortMethod = (a, b) => {
      if (props.course.rssList.indexOf(a.id.toString()) === -1) return 1;
      else return -1;
    };
    this.state = {
      rssList: CourseNewsSelectPage.rssList.concat().sort(this._sortMethod),
      searchText: '',
      refreshing: false
    };
    this.prevRSSList = [];
    props.course.rssList.forEach(item => this.prevRSSList.push(item));
  }

  componentDidMount() {
    if (CourseNewsSelectPage.rssList.length === 0) this.refresh();
  }

  render() {
    return (
      <View style={gStyles.container}>
        <StackToolbarView title={'添加新闻源'} handleBack={this.handleBack} />
        <View style={styles.container}>{this.renderList()}</View>
      </View>
    );
  }
  renderHeader = () => {
    let searchBarProp = {
      containerStyle: { backgroundColor: themeColor.backgroundColor, borderTopWidth: 0, borderBottomWidth: 0 },
      inputStyle: { backgroundColor: '#ececed', color: themeColor.primaryText },
      lightTheme: true,
      round: true,
      cancelButtonTitle: 'Cancel',
      placeholder: '搜索'
    };
    return (
      <View style={{ marginHorizontal: 12, marginVertical: 16 }}>
        <SearchBar
          {...searchBarProp}
          onChangeText={text => {
            let method = () => this.setState({ searchText: text });
            debounce(method, 50)();
          }}
        />
      </View>
    );
  };

  renderList = () => {
    return (
      <FlatList
        onRefresh={this.refresh}
        refreshing={this.state.refreshing}
        ListHeaderComponent={this.renderHeader}
        data={this.state.rssList.filter(this.listFilter)}
        renderItem={({ item }) => <CourseNewsSelectPageItem item={item} course={this.props.course} />}
        keyExtractor={item => item.id.toString()}
      />
    );
  };

  refresh = () => {
    this.setState({ refreshing: true });
    fetchRSSList(results => {
      CourseNewsSelectPage.rssList = results.data;
      this.setState({ rssList: results.data.sort(this._sortMethod), refreshing: false });
    });
  };

  listFilter = item => {
    let searchText = this.state.searchText;
    let findWord = input => {
      return item[input].indexOf(searchText.toLowerCase()) !== -1;
    };
    for (let i of ['category_name', 'source', 'info']) {
      if (findWord(i)) return true;
    }
    return false;
  };

  handleBack = () => {
    console.log(this.prevRSSList);
    console.log(this.props.course.rssList);
    let needRefresh = !arrayEquals(this.prevRSSList, this.props.course.rssList);
    console.log(needRefresh);
    this.props.back(needRefresh);
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
