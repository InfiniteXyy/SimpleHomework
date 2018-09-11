import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import propTypes from 'prop-types';
import moment from 'moment';
import { themeColor, gStyles } from '../../global';
import { fetchCourseGroups } from '../../global/utils';

export default class CourseGroup extends React.Component {
  static propTypes = {
    course: propTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
  }

  componentDidMount() {
    fetchCourseGroups(null, result => {
      this.setState({ groups: result });
    });
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.largeTitle}>群组</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {this.state.groups.map((item, index) => (
            <CourseGroupItem group={item} key={index.toString()} />
          ))}
        </ScrollView>
        <Text style={styles.largeTitle}>消息</Text>
      </ScrollView>
    );
  }
}

class CourseGroupItem extends React.Component {
  static propTypes = {
    group: propTypes.object.isRequired
  };

  render() {
    let group = this.props.group;
    return (
      <View style={styles.cardContainer}>
        {this.renderTop()}
        {this.renderBottom()}
      </View>
    );
  }

  renderTop = () => {
    let { date, title } = this.props.group;

    return (
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };
  renderBottom = () => {
    let { members } = this.props.group;
    let subMembers = members.slice(0, 3);
    return (
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={styles.subtitle}>{members.length + ' 名成员'}</Text>
          <View style={gStyles.rightIconContainer}>
            {subMembers.map((item, index) => (
              <Avatar
                rounded
                height={18}
                containerStyle={styles.avatar}
                source={{ url: item.avatar }}
                key={index.toString()}
              />
            ))}
          </View>
        </View>
      </View>
    );
  };
}

const styles = {
  largeTitle: {
    marginTop: 16,
    marginLeft: 26,
    fontSize: 14,
    fontWeight: '500',
    color: themeColor.primaryText
  },
  cardContainer: {
    marginLeft: 16,
    marginTop: 10,
    height: 134,
    width: 134,
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#979797'
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: themeColor.secondaryText
  },
  title: {
    fontSize: 16,
    color: themeColor.primaryText,
    fontWeight: '500'
  },
  avatar: {
    marginLeft: -4
  }
};
