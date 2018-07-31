import React from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Icon } from "react-native-elements";
import { colors, styles } from "../static";
import ScrollableTabView from "react-native-scrollable-tab-view";
import TabBarView from "../components/TabBarView";
import { demoList } from "../DemoServer";

export default class HomeworkDetail extends React.PureComponent {
  render() {
    let cid = this.props.navigation.getParam("cid", "1");
    let data = this.props.screenProps.data;
    let courseData;
    for (let i of data) {
      if (i.cid === cid) {
        courseData = i;
      }
    }
    return (
      <View style={styles.simpleContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles.leftButtonContainer}>
              <Icon
                name="ios-arrow-back"
                type="ionicon"
                size={25}
                color={colors.black}
              />
              <Text style={styles.title}>课程</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.rightTitleContainer}>
            <Icon name="tune" type="material" size={25} color={colors.gray} />
          </View>
        </View>

        <ScrollView>
          <View style={styles.whiteContainer}>
            <View
              style={{
                width: 113,
                height: 113,
                borderRadius: 8,
                backgroundColor: "#fafafa",
                marginRight: 30
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.courseBigTitle}>{courseData.title}</Text>
              <Text style={styles.courseDetail}>10 人正在关注</Text>
            </View>
          </View>

          <View style={{ backgroundColor: "white", marginTop: 9, height: 600 }}>
            <ScrollableTabView renderTabBar={() => <TabBarView />}>
              <HomeworkPage data={courseData} tabLabel="任务" />
              <ScrollView tabLabel="群组" />
              <ScrollView tabLabel="资讯" />
              <ScrollView tabLabel="成就" />
            </ScrollableTabView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

class HomeworkPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.data.data
    };
  }
  _renderHomework = ({ item, index }) => {
    console.log(item);
    return <Text>{item.content}</Text>;
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderHomework}
        />
      </View>
    );
  }
}
