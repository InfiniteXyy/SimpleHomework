import React from 'react';
import { View, ScrollView, Text, TouchableHighlight } from 'react-native';
import StackToolbarView from '../../components/StackToolbarView';
import { Icon } from 'react-native-elements';
import { gStyles, themeColor } from '../../global';
import realm from '../../global/realm';
import propTypes from 'prop-types';
import { getWeekIndex } from '../../global/utils';

export default class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      currentListDepth: 1,
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
        listItems[index] = { title: '第 ' + index + ' 周', data: [], id: index };
      }
    });
    this.setState({ listItems: listItems });
  };

  render() {
    let listItems;
    let allItems = this.state.listItems;
    switch (this.state.currentListDepth) {
      case 0:
        break;
      case 1:
        listItems = allItems;
        break;
      case 2:
        listItems = allItems[this.state.index].data;
    }
    return (
      <View style={[gStyles.container, { backgroundColor: themeColor.backgroundColor }]}>
        <StackToolbarView title={'归档'} handleBack={() => this.props.navigation.goBack()} />
        <ScrollView>
          <Text style={styles.routeTitle}>/大二下</Text>
          <View style={styles.listContainer}>
            {listItems.map((item, index) => {
              return (
                <ArchiveFolderItem
                  item={item}
                  key={item.id}
                  onPress={this.changeListDepth(index)}
                  depth={this.state.currentListDepth}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }

  changeListDepth = itemIndex => () => {
    if (this.state.currentListDepth === 2) return;
    this.setState(prevState => ({ currentListDepth: prevState.currentListDepth + 1, index: itemIndex }));
  };
}

class ArchiveFolderItem extends React.Component {
  static propTypes = {
    item: propTypes.object.isRequired,
    onPress: propTypes.func,
    depth: propTypes.number.isRequired
  };

  render() {
    let { title, rightTitle } = this.getItemProps(this.props.item);
    let { onPress } = this.props;
    let iconProps = {
      size: 24,
      name: 'md-folder',
      type: 'ionicon',
      color: themeColor.activeIcon
    };
    return (
      <TouchableHighlight underlayColor={themeColor.underlayColor} onPress={onPress}>
        <View style={styles.folderItemContainer}>
          <Icon {...iconProps} />
          <Text style={styles.itemTitle}>{title}</Text>
          <View style={gStyles.rightIconContainer}>
            <Text style={styles.itemSubtitle}>{rightTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  getItemProps = item => {
    let rightTitle, title;
    if (this.props.depth === 1) {
      let length = item.data.length;
      rightTitle = length === 0 ? '空' : length + ' 个任务';
      title = item.title;
    } else {
      rightTitle = '';
      title = item.content;
    }

    return {
      rightTitle,
      title
    };
  };
}

const styles = {
  folderItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 20,
    borderTopWidth: 0.75,
    borderTopColor: '#eeeeee',
    backgroundColor: 'white'
  },
  listContainer: {
    borderBottomWidth: 0.75,
    borderBottomColor: '#eeeeee'
  },
  routeTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 12,
    color: themeColor.primaryText
  },
  itemTitle: {
    color: themeColor.primaryText,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 20
  },
  itemSubtitle: {
    color: themeColor.secondaryText,
    fontSize: 14
  }
};
