import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { colors, gStyles, themeColor } from '../../global';
import propTypes from 'prop-types';
import realm from '../../global/realm';
import { Avatar } from 'react-native-elements';

export default class CourseNewsSelectPageItem extends React.PureComponent {
  static propTypes = {
    course: propTypes.object.isRequired,
    item: propTypes.object.isRequired
  };
  render() {
    return (
      <View style={styles.cardContainer}>
        {this.renderLeft()}
        {this.renderRight()}
      </View>
    );
  }

  renderLeft = () => {
    let item = this.props.item;
    return <Image source={{ uri: item.img_url }} style={{ height: 36, width: 36, opacity: 0.6 }} />;
  };

  renderRight = () => {
    let item = this.props.item;
    let course = this.props.course;
    let hasSub = course.rssList.indexOf(item.id.toString()) !== -1;
    return (
      <View style={{ marginLeft: 20, flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <View>
            <Text style={styles.title}>{item.category_name}</Text>
            <Text style={styles.subtitle}>{item.source}</Text>
          </View>
          <View style={gStyles.rightIconContainer}>
            <TouchableOpacity
              style={[styles.buttonContainer, { backgroundColor: !hasSub ? 'white' : themeColor.primaryColor }]}
              onPress={this.clickSub}
            >
              <Text style={[styles.buttonText, { color: hasSub ? 'white' : themeColor.primaryColor }]}>
                {hasSub ? '已订阅' : '订阅'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.detail} numberOfLines={3} ellipsizeMode={'tail'}>
          {item.info}
        </Text>
      </View>
    );
  };

  clickSub = () => {
    realm.write(() => {
      let list = this.props.course.rssList;
      let index = list.indexOf(this.props.item.id.toString());
      if (index !== -1) {
        list.splice(index, 1);
      } else {
        list.push(this.props.item.id.toString());
      }
      this.forceUpdate();
    });
  };
}

const styles = {
  cardContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#CCCCCC',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5
  },
  buttonContainer: {
    height: 26,
    width: 48,
    borderRadius: 5,
    borderColor: themeColor.primaryColor,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 11,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 17,
    color: themeColor.primaryText,
    fontWeight: '500'
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
    color: themeColor.secondaryText
  },
  detail: {
    fontSize: 14,
    marginTop: 6,
    color: colors.darkerGray,
    lineHeight: 18
  }
};
