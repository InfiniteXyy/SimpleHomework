import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { colors, themeColor, routeNames, gStyles } from '../../global';
import realm from '../../global/realm';

class DashboardCardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { homework: props.item };
  }

  render() {
    let { homework } = this.state;
    let rightIcon = homework.finished
      ? { type: 'ionicon', name: 'ios-checkmark-circle' }
      : { type: 'font-awesome', name: 'circle-thin' };
    let textStyle = homework.finished
      ? { fontSize: 15, textDecorationLine: 'line-through', color: '#DDDDDD' }
      : { fontSize: 15, color: themeColor.primaryText };
    return (
      <TouchableOpacity onPress={this.setHomeworkState} onLongPress={this.goToDetail}>
        <View style={styles.cardItemContainer}>
          <Text style={textStyle}>{homework.content}</Text>
          <View style={gStyles.rightIconContainer}>
            <Icon {...rightIcon} size={18} color={colors.lightBlue} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  goToDetail = () => {
    this.props.navigation.navigate(routeNames.homeworkDetail, {
      homework: this.state.homework
    });
  };

  setHomeworkState = () => {
    realm.write(() => {
      let { homework } = this.state;
      homework.finished = !homework.finished;
      this.setState({
        homework: this.props.item
      });
    });
  };
}

export default withNavigation(DashboardCardItem);

const styles = {
  cardItemContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 39
  }
};
