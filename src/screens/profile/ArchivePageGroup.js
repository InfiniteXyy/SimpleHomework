import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import ArchivePageItem, { ArchiveFolderItem, ArchiveHomeworkItem } from './ArchivePageItems';
import propTypes from 'prop-types';
import { colors, themeColor } from '../../global';

export class ArchiveFolderGroup extends React.Component {
  static propTypes = {
    folders: propTypes.array.isRequired,
    changeListDepth: propTypes.func.isRequired
  };

  render() {
    return (
      <View style={styles.listContainer}>
        {this.props.folders.map((item, index) => {
          return <ArchiveFolderItem item={item} key={item.id} onPress={this.props.changeListDepth(index)} />;
        })}
      </View>
    );
  }
}
export class ArchiveHomeworkPage extends React.Component {
  static propTypes = {
    homeworkList: propTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
  }

  componentDidMount() {
    let groups = [];
    this.props.homeworkList.forEach(i => {
      let index = groups.findIndex(item => item.title === i.course.title);
      if (index !== -1) {
        groups[index].data.push(i);
      } else {
        groups.push({ title: i.course.title, data: [i] });
      }
    });
    this.setState({ groups: groups });
  }

  render() {
    return (
      <View>
        {this.state.groups.map((item, index) => {
          return (
            <View style={styles.listContainer} key={index.toString()}>
              <Text style={styles.groupHeader}>{item.title}</Text>
              {item.data.map((homework, index) => {
                return <ArchiveHomeworkItem item={homework} key={index.toString()} />;
              })}
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = {
  listContainer: {
    marginTop: 20,
    borderBottomWidth: 0.75,
    borderBottomColor: '#eeeeee'
  },
  groupHeader: {
    fontSize: 14,
    fontWeight: '500',
    color: themeColor.secondaryText,
    marginLeft: 16,
    marginBottom: 10
  }
};
