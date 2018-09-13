import React from 'react';
import { View, FlatList, Text, Animated } from 'react-native';
import { gStyles, themeColor } from '../../global';
import propTypes from 'prop-types';
import CourseNewsSelectPageItem from './CourseNewsSelectPageItem';
import StackToolbarView from '../../components/StackToolbarView';
import { Icon, SearchBar } from 'react-native-elements';

export default class CourseNewsSelectPage extends React.Component {
  static propTypes = {
    back: propTypes.func.isRequired
  };

  render() {
    return (
      <View style={gStyles.container}>
        <StackToolbarView title={'添加新闻源'} handleBack={this.props.back} />
        <View style={styles.container}>{this.renderList()}</View>
      </View>
    );
  }
  renderHeader = () => {
    return (
      <View style={{ marginHorizontal: 12, marginVertical: 16 }}>
        <SearchBar
          containerStyle={{ backgroundColor: themeColor.backgroundColor, borderTopWidth: 0, borderBottomWidth: 0 }}
          inputStyle={{ backgroundColor: '#ececed' }}
          lightTheme
          round
          cancelButtonTitle="Cancel"
          placeholder="搜索"
        />
      </View>
    );
  };

  renderList = () => {
    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        data={[1, 2, 3, 4]}
        renderItem={({ item, index }) => <CourseNewsSelectPageItem />}
        keyExtractor={item => item.toString()}
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
