import { Component } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

export default class Detail04 extends Component {
  // 1.组件的生命周期（会调用）
  // UNSAFE_componentWillMount() {
  //   console.log("detail04 UNSAFE_componentWillMount");
  // }

  // componentDidMount() {
  //   console.log("detail04 componentDidMount");
  // }

  // componentWillUnmount() {
  //   console.log("detail04 componentWillUnmount");
  // }

  // 2.页面的生命周期
  onLoad() {
    console.log("detail04 onLoad");
  }
  componentDidShow() {
    console.log("detail04 componentDidShow");
  }
  onReady() {
    console.log("detail04 onReady");
  }
  componentDidHide() {
    console.log("detail04 componentDidHide");
  }
  onUnload() {
    console.log("detail04 onUnload");
  }
  onPullDownRefresh() {
    console.log("detail04 onPullDownRefresh");
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 1000);
  }
  onReachBottom() {
    console.log("detail04 onReachBottom");
  }

  render() {
    return (
      <View className="detail04">
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
        <View className="detail01-item">item1</View>
      </View>
    );
  }
}
