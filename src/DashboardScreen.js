import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
  Button
} from "react-native";
import { Icon } from "react-native-elements";
import { DashboardHeader } from "./components/BoardElements";

class DashboardItem extends React.PureComponent {
  render() {
    let finished = this.props.finished;
    const iconType = finished ? "ionicon" : "font-awesome";
    const iconName = finished ? "ios-checkmark-circle" : "circle-thin";
    const textStyle = finished
      ? { textDecorationLine: "line-through", color: "#DDDDDD" }
      : {};
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.onPressItem(this.props.id)}
      >
        <View style={styles.dashboardCardItem}>
          <Text style={textStyle}>{this.props.title}</Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Icon type={iconType} name={iconName} size={18} color="#FFAFAF" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

class DashboardCard extends React.PureComponent {
  _renderItem = ({ item }) => (
    <DashboardItem
      id={item.id}
      onPressItem={this.props.changeFinished}
      finished={item.finished}
      title={item.content}
    />
  );
  render() {
    return (
      <View style={styles.dashboardCardContainer}>
        <Text style={styles.dashboardCardTitle}>{this.props.title}</Text>
        <FlatList
          data={this.props.data}
          keyExtractor={(item, index) => item.id}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
export default class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoList: [
        [
          { id: "2", finished: false, content: "整理房间" },
          { id: "3", finished: false, content: "做大扫除" }
        ],
        [
          { id: "4", finished: true, content: "做张卷子" },
          { id: "5", finished: false, content: "整理房间" },
          { id: "6", finished: true, content: "做大扫除" }
        ]
      ]
    };
  }

  static navigationOptions = {
    title: "主页"
  };

  _changeFinished = id => {
    this.setState(previousState => ({
      demoList: previousState.demoList.map(i =>
        i.map(j => {
          if (j.id === id) j.finished = !j.finished;
          return j;
        })
      )
    }));
  };

  _onAddHomework = () => {
    this.props.navigation.navigate("AddHomework");
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <DashboardHeader
            title="Week 3"
            subtitle="星期五 9:32"
            onClick={this._onAddHomework}
          />
          <DashboardCard
            title="机器学习"
            data={this.state.demoList[0]}
            changeFinished={this._changeFinished}
          />
          <DashboardCard
            title="计算机视觉"
            data={this.state.demoList[1]}
            changeFinished={this._changeFinished}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff"
  },
  dashboardCardTitle: {
    color: "#6200EE",
    fontSize: 18,
    marginBottom: 9,
    marginLeft: 16,
    marginTop: 9
  },
  dashboardCardContainer: {
    marginLeft: 36,
    marginRight: 36,
    paddingBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 26,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    elevation: 1
  },
  dashboardCardItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    height: 39
  }
});
