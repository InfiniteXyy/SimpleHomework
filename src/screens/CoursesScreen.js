import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Animated,
  Dimensions
} from "react-native";
import { DashboardHeader } from "../components/BoardElements";
import { Icon } from "react-native-elements";
import { colors, styles } from "../static";
import { Toolbar } from "../components/ToolbarView";
import ActionSheet from "react-native-actionsheet";

export default class CoursesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      windowWidth: Dimensions.get("window").width,
      windowHeight: Dimensions.get("window").height
    };
  }

  _onPress(item) {
    if (item.title === "+") {
      this.props.navigation.navigate("AddCourse");
    } else {
      this.props.navigation.navigate("CourseDetail", { cid: item.cid });
    }
  }

  actionList = ["添加新课", "设置排序", "取消"]

  _showActionSheet = () => {
    this.ActionSheet.show();
  };

  _onPressActionSheet = (index) => {

  }

  __renderCourse = ({ item }) => {
    if (item.title !== "+") {
      return (
        <TouchableOpacity onPress={() => this._onPress(item)}>
          <View style={[styles.courseCard, { height: 112 }]}>
            <Icon
              name="circle"
              size={24}
              type="font-awesome"
              color={item.color}
            />
            <Text
              style={{
                marginTop: 12,
                fontSize: 14,
                fontWeight: "bold",
                color: "#717171"
              }}
            >
              {item.title}
            </Text>
            <Text style={{ marginTop: 6, fontSize: 13, color: "#9b9b9b" }}>
              {item.data.length + " tasks"}
            </Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => this._onPress(item)}>
          <View style={[styles.courseCard, { height: 62 }]}>
            <Icon name="plus" size={24} type="feather" color="gray" />
          </View>
        </TouchableOpacity>
      );
    }
  };

  _rotateHandler = dims => {
    this.setState({
      windowWidth: dims.window.width,
      windowHeight: dims.window.height
    });
  };
  componentWillMount() {
    Dimensions.addEventListener("change", this._rotateHandler);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this._rotateHandler);
  }

  render() {
    const colNums = Math.floor(this.state.windowWidth / 179);

    console.log("info: course list columns = " + colNums);
    let demoCourses = [...this.props.screenProps.data, { title: "+" }];

    let animation = {
      onScroll: event => {
        let y = event.nativeEvent.contentOffset.y;
        this.state.scrollY.setValue(y);
      }
    };

    let margin = (this.state.windowWidth - colNums * 179) / 2;

    return (
      <View style={styles.container}>
        <FlatList
          style={{ width: this.state.windowWidth }}
          contentContainerStyle={{ marginHorizontal: margin }}
          ListHeaderComponent={
            <DashboardHeader
              title="2018"
              subtitle="~2019 at ECNU"
              padding={margin}
              onClick={this._showActionSheet}
            />
          }
          data={demoCourses}
          numColumns={colNums}
          keyExtractor={(item, index) => index.toString()}
          key={this.state.windowWidth / this.state.windowHeight < 1 ? "h" : "v"}
          renderItem={this.__renderCourse}
          {...animation}
        />
        <Toolbar scrollY={this.state.scrollY} title="2018" />
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          //title={'title'}
          options={this.actionList}
          cancelButtonIndex={2}
          //destructiveButtonIndex={1}
          onPress={index => {
            /* do something */
          }}
        />
      </View>
    );
  }
}
