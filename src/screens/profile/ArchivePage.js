import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import StackToolbarView from '../../components/StackToolbarView';
import { gStyles, themeColor } from '../../global';
import realm from '../../global/realm';
import { getWeekIndex, n2s } from '../../global/utils';
import ArchivePageItem from './ArchivePageItems';
import ArchivePageGroup, { ArchiveFolderGroup, ArchiveHomeworkPage } from './ArchivePageGroup';

export const DEPTH = {
  ROUTE_FOLDER: 0,
  SEMESTER_FOLDER: 1,
  WEEK_FOLDER: 2
};

export default class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      currentListDepth: DEPTH.SEMESTER_FOLDER,
      index: null
    };
  }

  componentDidMount() {
    this.readList();
  }
  readList = () => {
    let listItems = [];
    let homeworkList = realm.objects('Homework');
    homeworkList.forEach(i => {
      let index = getWeekIndex(i.created);
      if (listItems[index]) {
        listItems[index].data.push(i);
      } else {
        listItems[index] = { title: '第' + n2s(index) + '周', data: [], id: index };
      }
    });
    this.setState({ listItems: listItems });
  };

  render() {
    let allItems = this.state.listItems;
    let groupPage = <View />;
    switch (this.state.currentListDepth) {
      case DEPTH.ROUTE_FOLDER:
        break;
      case DEPTH.SEMESTER_FOLDER:
        groupPage = <ArchiveFolderGroup folders={allItems} changeListDepth={this.changeListDepth} />;
        break;
      case DEPTH.WEEK_FOLDER:
        groupPage = <ArchiveHomeworkPage homeworkList={allItems[this.state.index].data} />;
        break;
    }
    let routeName = '/ 大二下';
    if (this.state.currentListDepth === DEPTH.WEEK_FOLDER) {
      routeName += ' / ' + allItems[this.state.index].title;
    }

    return (
      <View style={[gStyles.container, { backgroundColor: themeColor.backgroundColor }]}>
        <StackToolbarView title={'归档'} handleBack={this.handleBack} />
        <ScrollView>
          <Text style={styles.routeTitle}>{routeName}</Text>
          {groupPage}
        </ScrollView>
      </View>
    );
  }

  changeListDepth = itemIndex => () => {
    if (this.state.currentListDepth === 2) return;
    this.setState(prevState => ({ currentListDepth: prevState.currentListDepth + 1, index: itemIndex }));
  };

  handleBack = () => {
    if (this.state.currentListDepth === 2) {
      this.setState(prevState => ({ currentListDepth: prevState.currentListDepth - 1, index: null }));
    } else {
      this.props.navigation.goBack();
    }
  };
}

const styles = {
  routeTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 25,
    color: themeColor.primaryText
  }
};
