import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Animated,
  Dimensions
} from "react-native";
import { themeColor, gStyles, routeNames } from "../global";
import DashboardHeader from "../shared/DashboardHeader";
import { Icon } from "react-native-elements";
import ToolbarView from "../shared/ToolbarView";
import realm from "../global/realm";
import MyBottomModal from "../shared/MyBottomModal";
import CourseAdd from "../modals/CourseAdd";

const cardMargin = 16;

export default class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "2018",
      subtitle: "~2019 at ECNU",
      modalVisible: false,
      scrollY: new Animated.Value(0),
      // for screen rotation
      windowWidth: Dimensions.get("window").width,
      windowHeight: Dimensions.get("window").height,
      columnNumber: Math.floor(Dimensions.get("window").width / 165)
    };
  }

  componentWillMount() {
    this.rotateHandler = Dimensions.addEventListener("change", dims => {
      this.setState({
        windowWidth: dims.window.width,
        windowHeight: dims.window.height,
        columnNumber: Math.floor(Dimensions.get("window").width / 165)
      });
    });
    let courses = realm.objects("Course");
    // courses.addListener(this.updateUI);
    this.setState({ courses });
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.rotateHandler);
    // this.state.courses.removeListener(this.updateUI);
  }

  updateUI = (newList, changes) => {
    if (changes.insertions.length !== 0) {
      console.log("Courses Screen insert...");
      console.log(changes);
      this.forceUpdate();
    }
  };

  render() {
    let dataList = [...this.state.courses];
    dataList.push("+");
    return (
      <View style={gStyles.container}>
        <FlatList
          onScroll={this.handleScroll}
          ListHeaderComponent={
            <DashboardHeader
              title={this.state.title}
              subtitle={this.state.subtitle}
              onClick={() => {}}
            />
          }
          numColumns={this.state.columnNumber}
          key={this.state.windowWidth / this.state.windowHeight < 1 ? "h" : "v"}
          data={dataList}
          keyExtractor={item => item.title}
          renderItem={this.renderCourse}
        />
        <ToolbarView title={this.state.title} scrollY={this.state.scrollY} />
        <MyBottomModal
          isVisible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          child={<CourseAdd />}
        />
      </View>
    );
  }

  renderCourse = ({ item }) => {
    let cols = this.state.columnNumber;
    let cardWidth = (this.state.windowWidth - cardMargin * (cols + 1)) / cols;

    if (item === "+") {
      return (
        <TouchableOpacity
          onPress={() => {
            this.setState({ modalVisible: true });
          }}
        >
          <View style={[styles.courseCard, { height: 62, width: cardWidth }]}>
            <Icon name="plus" size={24} type="feather" color="gray" />
          </View>
        </TouchableOpacity>
      );
    }
    let iconProps = {
      name: "circle",
      size: 24,
      type: "font-awesome",
      color: item.color
    };

    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(routeNames.courseDetail, {
            course: item
          })
        }
      >
        <View style={[styles.courseCard, { height: 112, width: cardWidth }]}>
          <Icon {...iconProps} />
          <Text style={styles.cardTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  handleScroll = event => {
    this.state.scrollY.setValue(event.nativeEvent.contentOffset.y);
  };

  toggleModal = () => {
    this.setState({ modalVisible: false });
  };
}

const styles = StyleSheet.create({
  courseCard: {
    marginLeft: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#CCCCCC",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.38,
    shadowRadius: 2,
    elevation: 1
  },
  cardTitle: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "bold",
    color: themeColor.primaryText
  },
  cardSubtitle: {
    marginTop: 6,
    fontSize: 13,
    color: themeColor.secondaryText
  }
});
