import { Component } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

export default class Index extends Component {
  UNSAFE_componentWillMount() {}

  componentDidMount() {
    console.log(VERSION);
    const app = Taro.getApp(); // 不需要这样写：app.globalData.name
    console.log(app.name);
    console.log(app.age);
    console.log(app.id);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index global-style">
        <Text>Hello world!</Text>
      </View>
    );
  }
}
