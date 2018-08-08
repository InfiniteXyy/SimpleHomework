import React from "react";
import { KeyboardAvoidingView } from "react-native";
import Modal from "react-native-modal";
import propTypes from "prop-types";

export default class MyBottomModal extends React.Component {
  static propTypes = {
    isVisible: propTypes.bool.isRequired,
    toggleModal: propTypes.func.isRequired,
    child: propTypes.node.isRequired
  };

  render() {
    let modalProps = {
      isVisible: this.props.isVisible,
      swipeDirection: "down",
      onSwipe: this.props.toggleModal,
      backdropOpacity: 0.38,
      animationInTiming: 500,
      animationOutTiming: 450,
      onBackdropPress: this.props.toggleModal,
      style: {
        flex: 1,
        justifyContent: "flex-end",
        margin: 0
      }
    };

    return (
      <Modal {...modalProps}>
        {React.cloneElement(this.props.child, {
          goBack: this.props.toggleModal
        })}
      </Modal>
    );
  }
}
