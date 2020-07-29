import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.NavBar}>
        <Text style={styles.NavBarText}>더보기</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  NavBar: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6E40",
  },
  NavBarText: {
    fontSize: 20,
    color: "white",
  },
});
