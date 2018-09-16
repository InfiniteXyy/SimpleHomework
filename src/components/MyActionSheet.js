import React from 'react';
import ActionSheet from 'react-native-actionsheet';
import propTypes from 'prop-types';

export default class MyActionSheet extends React.Component {
  static propTypes = {
    bindAction: propTypes.func,
    actionData: propTypes.array
  };

  componentDidMount() {
    let actionList = this.props.actionData;
    this.props.bindAction(() => {
      this.ActionSheet.show();
    });
    this.actionSheetProps = {
      options: actionList.map(i => i.title),
      cancelButtonIndex: actionList.findIndex(i => i.type === 'cancel'),
      destructiveButtonIndex: actionList.findIndex(i => i.type === 'destructive'),
      onPress: index => actionList[index].method()
    };
  }
  render() {
    return <ActionSheet ref={o => (this.ActionSheet = o)} {...this.actionSheetProps} />;
  }
}
