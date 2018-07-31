import React from "react";
import { View, FlatList, Text, ScrollView, Animated } from "react-native";
import { colors, styles } from "../static";
import ScrollableTabView from "react-native-scrollable-tab-view";
import TabBarView from "../components/TabBarView";
import { StackHeader } from "../components/StackElements";

const HEADER_HEIGHT = 180;
export default class HomeworkDetail extends React.PureComponent {
  offset: Animated.Value;

  componentWillMount() {
    this.offset = new Animated.Value(0);
  }

  render() {
    const translateY = this.offset.interpolate({
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [0, -HEADER_HEIGHT],
      extrapolate: "clamp"
    });

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
        <StackHeader
          leftTitle="课程"
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <View style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <Animated.View
            style={[
              {
                position: "absolute",
                left: 0,
                right: 0,
                overflow: "hidden",
                height: HEADER_HEIGHT
              },
              { transform: [{ translateY }] }
            ]}
          >
            <CourseDetailHeader data={courseData} />
          </Animated.View>

          <Animated.View
            style={[
              {
                flex: 1,
                marginTop: HEADER_HEIGHT,
                marginBottom: -HEADER_HEIGHT
              },
              { transform: [{ translateY }] }
            ]}
          >
            <ScrollableTabView renderTabBar={() => <TabBarView />}>
              <StickScrollView
                scrollY={this.offset}
                tabLabel="任务"
                content={<HomeworkPage />}
              />
              <StickScrollView
                scrollY={this.offset}
                tabLabel="群组"
                content={<HomeworkPage />}
              />
              <StickScrollView
                scrollY={this.offset}
                tabLabel="资讯"
                content={<HomeworkPage />}
              />
              <StickScrollView
                scrollY={this.offset}
                tabLabel="成就"
                content={<HomeworkPage />}
              />
            </ScrollableTabView>
          </Animated.View>
        </View>
      </View>
    );
  }
}

class StickScrollView extends React.PureComponent {
  render() {
    let animation = {
      onScroll: Animated.event(
        [{ nativeEvent: { contentOffset: { y: this.props.scrollY } } }],
        { useNativeDriver: true }
      )
    };

    const translateY = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [0, HEADER_HEIGHT],
      extrapolate: "clamp"
    });
    let transform = [{ translateY }];

    return (
      <View style={{ flex: 1 }}>
        <Animated.ScrollView scrollEventThrottle={1} {...animation}>
          <Animated.View style={{ paddingBottom: HEADER_HEIGHT, transform }}>
            {this.props.content}
          </Animated.View>
        </Animated.ScrollView>
      </View>
    );
  }
}

class HomeworkPage extends React.PureComponent {
  constructor(props) {
    super(props);
    let data = [];
    for (let i = 0; i < 30; i++) {
      data.push("content" + i);
    }
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <View style={{ height: 800, backgroundColor: "white", padding: 20 }}>
        {this.state.data.map((item, index) => {
          return <Text key={index}>{item}</Text>;
        })}
      </View>
    );
  }
}

class GroupPage extends React.PureComponent {
  render() {
    let animation = {
      onScroll: Animated.event(
        [{ nativeEvent: { contentOffset: { y: this.props.scrollY } } }],
        { useNativeDriver: true }
      )
    };

    const translateY = this.props.scrollY.interpolate({
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [0, HEADER_HEIGHT],
      extrapolate: "clamp"
    });

    let transform = [{ translateY }];

    return (
      <View style={{ flex: 1 }}>
        <Animated.ScrollView scrollEventThrottle={1} {...animation}>
          <Animated.View style={{ paddingBottom: HEADER_HEIGHT, transform }}>
            <View
              style={{ height: 800, backgroundColor: "skyblue", padding: 20 }}
            />
          </Animated.View>
        </Animated.ScrollView>
      </View>
    );
  }
}

class CourseDetailHeader extends React.PureComponent {
  render() {
    let courseData = this.props.data;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          flexDirection: "row",
          borderBottomWidth: 9,
          borderBottomColor: colors.rice
        }}
      >
        <View
          style={{
            marginHorizontal: 20,
            alignSelf: "center",
            width: 110,
            height: 110,
            borderRadius: 8,
            backgroundColor: "#fafafa"
          }}
        />
        <View style={{ marginTop: 40 }}>
          <Text style={styles.courseBigTitle}>{courseData.title}</Text>
          <Text style={styles.courseDetail}>10 人正在关注</Text>
        </View>
      </View>
    );
  }
}
