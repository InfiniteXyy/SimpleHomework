import React from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';
import moment from 'moment';
import { themeColor, gStyles } from '../../global';
import realm from '../../global/realm';
import StackHeader from '../../components/StackHeader';
import MyListItem from '../../components/MyListItem';
import MyTextInput from '../../components/MyTextInput';
import MyDatePicker from '../../components/MyDatePicker';
import MyBottomModal from '../../components/MyBottomModal';
import HomeworkAdd from '../modals/HomeworkAdd';

const df = date => moment(date).format('YYYY-M-D');

export default class HomeworkDetailEdit extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: props.navigation.getParam('content', null),
      editType: props.navigation.getParam('editType', 'back'),
      item: props.navigation.getParam('item', null),
      deadline: props.navigation.getParam('item', null).deadline,
      refreshCallback: props.navigation.getParam('refresh', null),
      modalVisible: false
    };
  }

  render() {
    return (
      <View style={gStyles.container}>
        <StackHeader
          leftTitle={'返回'}
          onPressLeft={() => this.props.navigation.goBack()}
          rightTitle={'保存'}
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
          <View style={gStyles.cardContainer}>{this.renderCard()}</View>
        </ScrollView>
        <MyDatePicker
          isVisible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          date={this.state.deadline}
          setDate={this.saveTimeAndClose}
        />
      </View>
    );
  }

  saveTimeAndClose = date => {
    this.setState({
      deadline: date,
      modalVisible: false,
      content: date ? df(date) : '未设置'
    });
  };

  toggleModal = () => {
    this.setState({ modalVisible: false });
  };

  renderCard = () => {
    let cardTitle, cardBody;
    switch (this.state.editType) {
      case '课程':
        cardTitle = '修改所属的课程';
        cardBody = (
          <FlatList
            data={realm.objects('Course')}
            renderItem={this.renderCourseItem}
            keyExtractor={item => item.title}
          />
        );
        break;
      case '内容':
        cardTitle = '修改作业内容';
        cardBody = (
          <View style={styles.inputItem}>
            <MyTextInput
              style={{ fontSize: 20 }}
              onChangeText={text => {
                this.setState({ content: text });
              }}
              value={this.state.content}
              returnKeyType="done"
            />
          </View>
        );
        break;
      case '截止时间':
        cardTitle = '设定截止时间';
        cardBody = (
          <Button
            raised
            icon={{ name: 'settings' }}
            title="设置"
            backgroundColor={themeColor.primaryColor}
            onPress={() => this.setState({ modalVisible: true })}
          />
        );
        break;
      case '备注':
        cardTitle = '编辑作业备注';
        break;
      default:
        cardTitle = '';
        break;
    }

    return (
      <View style={{ padding: 20, flex: 1, marginBottom: 12 }}>
        <Text style={styles.cardTitle}>{cardTitle}</Text>
        {cardBody}
      </View>
    );
  };

  renderCourseItem = ({ item }) => {
    let iconKind =
      item.title === this.state.content
        ? { type: 'ionicon', name: 'ios-checkmark-circle' }
        : { type: 'font-awesome', name: 'circle-thin' };
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ content: item.title });
        }}
      >
        <View style={styles.courseItem}>
          <Text style={{ fontSize: 16, color: themeColor.primaryText }}>{item.title}</Text>
          <View style={gStyles.rightIconContainer}>
            <Icon {...iconKind} size={18} color={themeColor.primaryColor} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  handleEdit = () => {
    switch (this.state.editType) {
      case '课程':
        realm.write(() => {
          this.state.item.course = realm.objectForPrimaryKey('Course', this.state.content);
          showMessage({
            message: '修改对应课程成功',
            description: '变为' + this.state.content,
            type: 'success'
          });
        });
        break;
      case '内容':
        realm.write(() => {
          this.state.item.content = this.state.content;
          showMessage({
            message: '修改作业内容成功',
            type: 'success'
          });
        });

        break;
      case '截止时间':
        realm.write(() => {
          this.state.item.deadline = this.state.deadline;
          showMessage({
            message: '修改截止时间成功',
            type: '变更为' + this.state.content
          });
        });
        break;
      case '备注':
        break;
      default:
        break;
    }
    this.props.navigation.goBack();
    this.state.refreshCallback();
  };
}

const styles = {
  cardTitle: {
    marginBottom: 20,
    fontSize: 18,
    color: themeColor.primaryText,
    fontWeight: 'bold'
  },
  courseItem: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputItem: {
    paddingVertical: 5,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1
  }
};
