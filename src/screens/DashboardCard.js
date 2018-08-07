import React from "react";
import { Text, View } from "react-native";
import gStyles from "../global/styles";
import { Icon } from "react-native-elements";
import { themeColor } from "../global";
import DashboardCardItem from "./DashboardCardItem";

export default class DashboardCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      course: props.data
    };
  }

  render() {
    let item = this.state.course;
    if (item.homeworkList.length === 0) return <View />;
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={gStyles.rightIconContainer}>
            <Icon
              name="ios-more"
              type="ionicon"
              size={24}
              color={themeColor.inactiveIcon}
            />
          </View>
        </View>
        {item.homeworkList.map((item, index) => (
          <DashboardCardItem item={item} key={index} />
        ))}
      </View>
    );
  }
}

const styles = {
  cardContainer: {
    marginVertical: 8,
    marginHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: "white",
    //TODO: android beautify
    shadowColor: "#CCCCCC",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2
  },
  cardTitleContainer: {
    marginBottom: 12,
    height: 56,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#DDDDDD"
  },
  cardTitle: {
    color: themeColor.primaryText,
    fontSize: 18,
    fontWeight: "bold"
  }
};
