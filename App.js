import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { render } from "react-dom";

import User from "./components/User.js";
import NavBar from "./components/NavBar.js";
import ButtonGroup from "./components/ButtonGroup.js";
import Taps from "./components/Taps.js";

//export default function App() {  <== 함수형 컴포넌트 vs 클래스 컴포넌트 차이 배움
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <User />
        <View style={{ height: 40 }}></View>
        <ButtonGroup />
        <View style={{ flex: 2 }}></View>
        <Taps />
        <StatusBar style="dark"></StatusBar>
      </View>
    ); // <View style={{flex: 1}}> 이부분은 ButtonGroup과 Taps 사이에 남은 공간을 다 차지하겠다는 의미이다.
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
