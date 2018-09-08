import React from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { gStyles, themeColor } from '../../global';
import StackHeader from '../../components/StackHeader';

const types = [{ title: '圆润', id: '1' }, { title: '方正', id: '2' }];
export default class PersonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '1'
    };
  }

  render() {
    return (
      <View style={[gStyles.container, { alignItems: 'center' }]}>
        <StackHeader leftTitle={'主题'} onPressLeft={() => this.props.navigation.goBack()} />
        <ScrollView>
          <View style={{ flexDirection: 'row', marginTop: '24%' }}>{types.map(this.renderChooseItem)}</View>
          <View style={{ alignSelf: 'center', marginTop: 70 }}>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="check" color={themeColor.primaryColor} reverse size={21} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
  renderChooseItem = item => {
    let borderColor = this.state.selected === item.id ? themeColor.primaryColor : themeColor.inactiveIcon;
    return (
      <View style={{ alignItems: 'center' }} key={item.id}>
        <TouchableWithoutFeedback onPress={() => this.handleSelect(item.id)}>
          <View style={[styles.roundCard, { borderColor }]} />
        </TouchableWithoutFeedback>
        <Text style={{ fontSize: 16, color: borderColor }}>{item.title}</Text>
      </View>
    );
  };

  handleSelect = id => {
    this.setState({ selected: id });
  };
}

const styles = {
  roundCard: {
    margin: 20,
    height: 125,
    width: 125,
    borderWidth: 2,
    borderRadius: 4
  }
};
