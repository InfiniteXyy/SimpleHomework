import BottomModalHeader from '../../components/BottomModalHeader';
import { View } from 'react-native';
import React from 'react';
import { themeColor } from '../../global';

export default class HomeworkEditModal extends React.Component {
  render() {
    let { item, goBack } = this.props;
    if (!item) return <View style={styles.container} />;
    return (
      <View style={styles.container}>
        <BottomModalHeader onPressLeft={goBack} onPressRight={() => {}} title={item.title} />
      </View>
    );
  }
}

const styles = {
  container: {
    shadowColor: '#cccccc',
    shadowRadius: 10,
    elevation: 4,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    paddingBottom: 80,
    backgroundColor: themeColor.backgroundColor
  }
};
