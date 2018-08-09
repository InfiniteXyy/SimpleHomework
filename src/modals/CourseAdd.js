import React from "react";
import { Animated, Keyboard } from "react-native";
import MyTextInput from "../shared/MyTextInput";
import { themeColor } from "../global";
import realm from "../global/realm";
import BorderHeader from "../shared/BorderHeader";
import FlashMessage from "react-native-flash-message/src/FlashMessage";
import { showMessage } from "react-native-flash-message";

export default class CourseAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      transformY: new Animated.Value(0)
    };
  }

  goBack = () => {
    this.props.goBack();
  };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardWillShow",
      this._keyboardWillShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardWillHide",
      this._keyboardWillHide
    );
  }

  _keyboardWillShow = e => {
    Animated.spring(this.state.transformY, {
      toValue: -e.endCoordinates.height,
      useNativeDriver: true
    }).start();
  };

  _keyboardWillHide = e => {
    Animated.spring(this.state.transformY, {
      toValue: 0,
      useNativeDriver: true
    }).start();
  };
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.container,
          { transform: [{translateY: this.state.transformY}] }
        ]}
      >
        <BorderHeader onPressLeft={this.goBack} onPressRight={this.addCourse} />
        <MyTextInput
          style={{
            fontSize: 36,
            color: themeColor.primaryText,
            marginTop: 32
          }}
          placeholder="课程名..."
          returnKeyType="done"
          onChangeText={text => {
            this.setState({ content: text });
          }}
        />
        <FlashMessage
          ref={o => {
            this.message = o;
          }}
          position={"left"}
          floating={true}
        />
      </Animated.View>
    );
  }

  addCourse = () => {
    let title = this.state.content.trim();
    if (title.length === 0) {
      this.message.showMessage({
        message: "输入错误！",
        description: "请输入正确的名字",
        type: "warning"
      });
    } else {
      if (realm.objectForPrimaryKey("Course", title)) {
        this.message.showMessage({
          message: "课程重复！",
          description: "你已经添加过此课程",
          type: "danger"
        });
      } else {
        realm.write(() => {
          realm.create("Course", { title });
          showMessage({
            message: title,
            description: "已添加",
            type: "success"
          });
        });
        this.goBack();
      }
    }
  };
}

const styles = {
  container: {
    shadowColor: "#cccccc",
    shadowRadius: 10,
    elevation: 4,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    paddingHorizontal: 24,
    paddingBottom: 200,
    marginBottom: -120,
    backgroundColor: themeColor.backgroundColor
  }
};
