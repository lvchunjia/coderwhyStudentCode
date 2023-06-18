import { Component } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
// 全局样式
import "./index.scss";
import "./no-transform-unit.scss";
// 局部样式
import styles from "./index.module.scss";

// console.log(styles);
export default class StyleTaro extends Component {
  render() {
    const lineStyle = {
      // fontSize: 30, // 30px是不会被转换
      fontSize: Taro.pxTransform(30), // 30px是会被转换, 15px -> 30rpx
      color: "green",
    };
    return (
      <View>
        <View className="style-taro">单位px转换为rpx和rem</View>
        <View className="no-transform-unit">不转换单位</View>
        <View style={lineStyle}>行内样式，px的转换</View>
        <View style={{ fontSize: Taro.pxTransform(30) }}>
          行内样式，px的转换
        </View>
        <View className={styles["local-style"]}>
          编写局部样式
          <View className={styles["name"]}>name</View>
        </View>
        <View className="title">局部样式中编写的全局样式</View>
        <View className={styles["bg-img"]}></View>
        <Text className="text iconfont icon-shouye"></Text>
        <Text className="text iconfont icon-touxiang-kong"></Text>
      </View>
    );
  }
}
