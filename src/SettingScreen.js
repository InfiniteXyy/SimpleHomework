import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

export default class SettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>setting</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});