import React from "react";
import { colors, routeNames, themeColor } from "../global";
import { Text, TouchableOpacity, View } from "react-native";
import gStyles from "../global/styles";
import { Icon } from "react-native-elements";
import realm from "../global/realm";

export default class DashboardCardItem extends React.Component {
  render() {
    let item = this.props.item;
    let iconKind = item.finished
      ? { type: "ionicon", name: "ios-checkmark-circle" }
      : { type: "font-awesome", name: "circle-thin" };
    let textStyle = item.finished
      ? { fontSize: 15, textDecorationLine: "line-through", color: "#DDDDDD" }
      : { fontSize: 15, color: themeColor.primaryText };
    return (
      <TouchableOpacity
        onPress={this.changeItemFinished}
        onLongPress={this.goToDetail}
      >
        <View style={styles.cardItemContainer}>
          <Text style={textStyle}>{item.content}</Text>
          <View style={gStyles.rightIconContainer}>
            <Icon {...iconKind} size={18} color={colors.lightBlue} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  changeItemFinished = () => {
    realm.write(() => {
      let item = this.props.item;
      item.finished = !item.finished;
      this.forceUpdate();
    });
  };

  goToDetail = () => {

  };
}

const styles = {
  cardItemContainer: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 39
  }
};
