import React from 'react';
import { Text, View, TouchableHighlight, Animated } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import { themeColor, gStyles } from '../../global';
import DashboardCardItem from './DashboardCardItem';

// 计算卡片"内容高度"的函数
function getBodyHeight(num) {
  return num * 39 + 24;
}

export default class DashboardCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: props.data,
      isExpanding: true,
      homeworkList: props.data.homeworkList
    };
  }

  componentWillMount() {
    let { course, isExpanding } = this.state;
    this.setState({
      opacityAnimate: new Animated.Value(isExpanding ? 1 : 0),
      marginBottomAnimate: new Animated.Value(isExpanding ? 0 : -getBodyHeight(course.homeworkList.length))
    });
  }

  render() {
    let { course, isExpanding } = this.state;
    if (course.homeworkList.filtered('archived = false').length === 0) {
      return <View />;
    }
    return (
      <View style={styles.cardContainer}>
        {cardTitle(
          course.title,
          course.homeworkList.filtered('finished = false').length,
          isExpanding,
          this.setCardExpand
        )}
        {this.homeworkList()}
      </View>
    );
  }
  homeworkList = () => {
    let { opacityAnimate, marginBottomAnimate, course } = this.state;
    let animatedViewProps = {
      opacity: opacityAnimate,
      marginBottom: marginBottomAnimate
    };
    return (
      <Animated.View style={[styles.contentContainer, { ...animatedViewProps }]}>
        {course.homeworkList.map((item, index) => {
          return <DashboardCardItem item={item} key={index} />;
        })}
      </Animated.View>
    );
  };

  setCardExpand = () => {
    this.setState(({ homeworkList, isExpanding, marginBottomAnimate, opacityAnimate }) => {
      let expandHeight = getBodyHeight(homeworkList.length);
      let nextExpanding = !isExpanding;
      Animated.parallel([
        Animated.spring(marginBottomAnimate, {
          toValue: nextExpanding ? 0 : -expandHeight
        }),
        Animated.spring(opacityAnimate, {
          toValue: nextExpanding ? 1 : 0
        })
      ]).start();
      return { isExpanding: nextExpanding };
    });
  };
}

const cardTitle = (title, badge, isExpanding, onSetExpanding) => {
  let icon = isExpanding ? (
    <Icon name="chevron-up" type="entypo" size={18} color={themeColor.inactiveIcon} />
  ) : (
    <Badge
      value={badge}
      containerStyle={{
        backgroundColor: themeColor.underlayColor
      }}
    />
  );

  return (
    <TouchableHighlight onPress={onSetExpanding} underlayColor={themeColor.backgroundColor}>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={gStyles.rightIconContainer}>{icon}</View>
      </View>
    </TouchableHighlight>
  );
};

const styles = {
  cardContainer: {
    marginVertical: 8,
    marginHorizontal: 20,
    backgroundColor: 'white',
    shadowColor: '#CCCCCC',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2
  },
  cardTitleContainer: {
    height: 45,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardTitle: {
    color: themeColor.primaryText,
    fontSize: 16,
    fontWeight: 'bold'
  },
  contentContainer: {
    borderTopWidth: 0.5,
    borderTopColor: '#DDDDDD',
    paddingVertical: 12,
    overflow: 'hidden'
  }
};
