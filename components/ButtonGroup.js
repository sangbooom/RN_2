import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class Button extends Component {
  render(){
   const imageNames = {
      image1: require('../img/1.png'),
      image2: require('../img/2.png'),
      image3: require('../img/3.png'),
      image4: require('../img/4.png'),
      image5: require('../img/5.png'),
      image6: require('../img/6.png'),
      image7: require('../img/7.png'),
      image8: require('../img/8.png')
   };
    return (
      <View style={{flex:1, height:100, borderWidth: 0.5, justifyContent: "center", alignItems: "center" }}>
        <View style={{width:50, height:50, justifyContent: "center", alignItems: "center" }}>
          <Image source={imageNames[this.props.imageNames]} style={{width:30, height:30}} />
        </View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default class ButtonGroup extends Component {
  render() {
    return (
    <View style={styles.ButtonGroup}>
      <View style={{flexDirection: "row"}}>
        <Button name="내 계정" imageNames="image1"/>
        <Button name="친구" imageNames="image2" />
        <Button name="강의평가" imageNames="image3"/>
        <Button name="학점계산기" imageNames="image4"/>
      </View>
      <View style={{flexDirection: "row"}}>
        <Button name="쪽지함" imageNames="image5"/>
        <Button name="공지사항" imageNames="image6"/>
        <Button name="도움말" imageNames="image7"/>
        <Button name="설정" imageNames="image8"/>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  ButtonGroup: {
    height: 200,
    backgroundColor: "white",
  },
});
