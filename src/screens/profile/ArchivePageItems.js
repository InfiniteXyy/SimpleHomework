import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import propTypes from 'prop-types';
import { gStyles, themeColor } from '../../global';
import { Icon } from 'react-native-elements';
import { DEPTH } from './ArchivePage';

export default class ArchivePageItems extends React.Component {
  static propTypes = {
    item: propTypes.object.isRequired,
    onPress: propTypes.func,
    depth: propTypes.number.isRequired
  };

  render() {
    if (this.props.depth !== DEPTH.WEEK_FOLDER)
      return <ArchiveFolderItem item={this.props.item} onPress={this.props.onPress} />;
    return <ArchiveHomeworkItem item={this.props.item} />;
  }
}
export class ArchiveFolderItem extends React.Component {
  static propTypes = {
    item: propTypes.object.isRequired,
    onPress: propTypes.func.isRequired
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
    let length = item.data.length;
    let rightTitle = length === 0 ? '空' : length + ' 个任务';
    let title = item.title;
    return {
      rightTitle,
      title
    };
  };
}

export class ArchiveHomeworkItem extends React.Component {
  static propTypes = {
    item: propTypes.object.isRequired
  };

  render() {
    let { content, finished } = this.props.item;
    let iconProps = {
      size: 24,
      name: finished ? 'ios-checkmark-circle' : 'circle-thin',
      type: finished ? 'ionicon' : 'font-awesome',
      color: themeColor.activeIcon
    };
    return (
      <TouchableHighlight underlayColor={themeColor.underlayColor} onPress={() => {}}>
        <View style={styles.folderItemContainer}>
          <Icon {...iconProps} />
          <Text style={styles.itemTitle}>{content}</Text>
        </View>
      </TouchableHighlight>
    );
  }
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
