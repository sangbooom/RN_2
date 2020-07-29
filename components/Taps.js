import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class TapButton extends Component {
  render(){
    const imageNames = {
      image1: require('../img/tap_1.png'),
      image2: require('../img/tap_2.png'),
      image3: require('../img/tap_3.png'),
      image4: require('../img/tap_4.png'),
      more: require('../img/more.png')
    }
    return(
      <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <View style={{width:30, height: 35}}>
          <Image source={imageNames[this.props.imageNames]} style={{width:30, height:30}} />
        </View>
        <Text style={{marginTop: 5, color: "#A0A0A0"}}>{this.props.name}</Text>
      </View>
    );
  }
}

export default class Taps extends Component {
  render() {
    return (
      <View style={styles.Taps}>
        <TapButton name="홈" imageNames="image1"  />
        <TapButton name="시간표" imageNames="image2" />
        <TapButton name="커뮤니티" imageNames="image3" />
        <TapButton name="모임" imageNames="image4" />
        <TapButton name="더보기" imageNames="more" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Taps: {
    flex:1,
    flexDirection: "row",
    height: 60, //필요없는게 app.js에서 flex로 먼저 잡고있음.
    backgroundColor: "white",
    borderTopWidth: 0.5,
    borderColor: "#A0A0A0",
  },
});
