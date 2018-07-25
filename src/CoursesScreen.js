import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

export default class CoursesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>course</Text>
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