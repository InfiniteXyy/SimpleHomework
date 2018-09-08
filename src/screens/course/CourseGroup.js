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
        {this.state.groups.map((item, index) => (
          <CourseGroupItem group={item} key={index.toString()} />
        ))}
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
      <View style={[styles.cardContainer, { borderColor: group.color }]}>
        {this.renderTop()}
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>{this.renderBottom()}</View>
      </View>
    );
  }

  renderTop = () => {
    let { date, title } = this.props.group;

    return (
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.subtitle}>{moment(date).format('创建于 YYYY年M月D日')}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };
  renderBottom = () => {
    let { members } = this.props.group;
    return (
      <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'flex-end' }}>
        <Text style={styles.subtitle}>{members.length + ' 名成员'}</Text>
        <View style={gStyles.rightIconContainer}>
          {members.map((item, index) => (
            <Avatar
              rounded
              height={24}
              containerStyle={styles.avatar}
              source={{ url: item.avatar }}
              key={index.toString()}
            />
          ))}
        </View>
      </View>
    );
  };
}

const styles = {
  cardContainer: {
    marginHorizontal: 20,
    marginTop: 16,
    height: 147,
    paddingVertical: 20,
    backgroundColor: 'white',
    shadowColor: '#CCCCCC',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.38,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 4,
    borderLeftWidth: 6
  },
  subtitle: {
    fontSize: 14,
    color: themeColor.secondaryText
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    color: themeColor.primaryText,
    fontWeight: '500'
  },
  avatar: {
    marginLeft: -3
  }
};
