import React from "react";
import { View, ScrollView } from "react-native";
import StackHeader from "../shared/StackHeader";
import gStyles from "../global/styles";
import MyListItem from "../shared/MyListItem";

export default class HomeworkDetailEdit extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: props.navigation.getParam("content", null),
      editType: props.navigation.getParam("editType", "back")
    };
  }

  render() {
    return (
      <View style={gStyles.container}>
        <StackHeader
          leftTitle={"返回"}
          onPressLeft={() => this.props.navigation.goBack()}
          rightTitle={"保存"}
          onPressRight={this.handleEdit}
        />
        <ScrollView>
          <View style={gStyles.cardContainer}>
            <MyListItem
              title={this.state.editType}
              content={this.state.content}
              rightIconVisible={false}
              needBottom={false}
            />
          </View>
          <View style={gStyles.cardContainer}>
            <View style={{height: 300}}/>
          </View>
        </ScrollView>
      </View>
    );
  }
  
  handleEdit = () => {
  
  }
}
