import React from 'react';
import { View, Text } from 'react-native';
import { colors, gStyles, themeColor } from '../../global';

export default class CourseNewsSelectPageItem extends React.PureComponent {
  render() {
    return (
      <View style={styles.cardContainer}>
        {this.renderLeft()}
        {this.renderRight()}
      </View>
    );
  }

  renderLeft = () => {
    return <View style={{ height: 44, width: 44, borderRadius: 2, backgroundColor: '#EAEAEA' }} />;
  };

  renderRight = () => {
    return (
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Text style={styles.title}>123 新闻人</Text>
            <Text style={styles.subtitle}>www.csdn.cn</Text>
          </View>
          <View style={gStyles.rightIconContainer}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>加入</Text>
            </View>
          </View>
        </View>
        <Text style={styles.detail}>每天发布垃圾新闻，每天发布垃圾新闻，每天发布垃圾新闻。</Text>
      </View>
    );
  };
}

const styles = {
  cardContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    height: 124,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#CCCCCC',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5
  },
  buttonContainer: {
    height: 20,
    width: 48,
    borderRadius: 5,
    borderColor: themeColor.primaryColor,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 11,
    color: themeColor.primaryColor,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 17,
    color: themeColor.primaryText,
    fontWeight: '500'
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
    color: themeColor.secondaryText
  },
  detail: {
    fontSize: 14,
    marginTop: 10,
    color: colors.darkerGray,
    lineHeight: 17
  }
};
