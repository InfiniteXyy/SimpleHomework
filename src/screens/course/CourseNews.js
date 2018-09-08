import React from 'react';
import { FlatList } from 'react-native';
import propTypes from 'prop-types';
import CourseNewsItem from './CourseNewsItem';
import { fetchNews } from '../../global/utils';

export default class CourseNews extends React.Component {
  static propTypes = {
    urlCallback: propTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = { newsList: [] };
  }

  componentDidMount() {
    fetchNews('news', result => {
      this.setState({ newsList: result.data });
    });
  }

  render() {
    return (
      <FlatList
        data={this.state.newsList}
        renderItem={({ item }) => <CourseNewsItem item={item} urlCallback={this.props.urlCallback} />}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
