import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { ModalIcon } from "../components/ModalElements";
import { StackHeader } from "../components/StackElements";
import { colors } from "../static";

export default class ThemeChoose extends React.PureComponent {
  state = {
    isRound: true
  };

  onPressType = type => {
    this.setState({
      isRound: type
    });
  };

  render() {
    let isRound = this.state.isRound;
    return (
      <View style={styles.container}>
        <StackHeader
          onPressLeft={() => this.props.navigation.goBack()}
          leftTitle="主题"
        />
        <View style={styles.rowContainer}>
          <ChooseItem
            roundType={true}
            isRound={isRound}
            onPress={this.onPressType}
          />
          <ChooseItem
            roundType={false}
            isRound={isRound}
            onPress={this.onPressType}
          />
        </View>
        <ModalIcon name="check" type="feather" />
      </View>
    );
  }
}

class ChooseItem extends React.PureComponent {
  render() {
    const roundType = this.props.roundType;
    const isRound = this.props.isRound;
    const borderColor = roundType === isRound ? colors.blue : "#E9E9E9";

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.onPress(roundType);
        }}
      >
        <View style={[styles.roundCard, { borderColor }]} />
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center"
  },
  rowContainer: {
    marginVertical: 92,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  roundCard: {
    margin: 20,
    height: 125,
    width: 125,
    borderWidth: 2,
    borderRadius: 4
  }
});
