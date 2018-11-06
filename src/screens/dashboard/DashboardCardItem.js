import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { colors, themeColor, routeNames, gStyles } from '../../global';

class DashboardCardItem extends React.Component {
  render() {
    let { item, onPressItem } = this.props;
    let rightIcon = item.finished
      ? { type: 'ionicon', name: 'ios-checkmark-circle' }
      : { type: 'font-awesome', name: 'circle-thin' };
    let textStyle = item.finished
      ? { fontSize: 15, textDecorationLine: 'line-through', color: '#DDDDDD' }
      : { fontSize: 15, color: themeColor.primaryText };
    return (
      <TouchableOpacity onPress={onPressItem(item)} onLongPress={this.goToDetail}>
        <View style={styles.cardItemContainer}>
          <Text style={textStyle}>{item.content}</Text>
          <View style={gStyles.rightIconContainer}>
            <Icon {...rightIcon} size={18} color={colors.lightBlue} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  goToDetail = () => {
    this.props.navigation.navigate(routeNames.homeworkDetail, {
      homework: this.props.item
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
