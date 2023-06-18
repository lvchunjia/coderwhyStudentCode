import { Component } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

export default class Detail01 extends Component {
  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  $intance = Taro.getCurrentInstance(); // 是可以拿到当前的app实例，page实例和router对象

  // 页面生命周期
  onLoad(options) {
    // 方式一：拿到页面传递过来的url参数
    console.log("Detail01=", options);

    // 下面的代码只兼容微信小程序
    if (process.env.TARO_ENV === "weapp") {
      const eventChannel = this.$intance.page.getOpenerEventChannel();
      eventChannel.on("acceptDataFromHomePage", function (data) {
        console.log(data);
      });
    }
  }
  componentDidShow() {
    // 方式二: 拿到页面传递过来的url参数
    console.log("Detail01=>", this.$intance.router.params);
  }

  componentDidHide() {}

  render() {
    return (
      <View className="detail01">
        <Text>detail01 !</Text>
      </View>
    );
  }
}
