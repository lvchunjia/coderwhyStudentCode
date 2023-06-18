import { Component } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

export default class Detail02 extends Component {
  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  $intance = Taro.getCurrentInstance(); // 是可以拿到当前的app实例，page实例和router对象

  componentDidShow() {}

  componentDidHide() {}

  goBack() {
    Taro.navigateBack({
      delta: 1,
    });

    if (process.env.TARO_ENV === "weapp") {
      // const pages = Taro.getCurrentPages()
      // const page = pages[pages.length - 1]
      // 注意：这中方式只支持微信小程序端
      const eventChannel = this.$intance.page.getOpenerEventChannel();
      eventChannel.emit("acceptDataFromDetail02Page", {
        data: "拿到detail02传递到home页面的数据",
      });
    }
  }

  render() {
    return (
      <View className="detail02">
        <Button onClick={() => this.goBack()}>返回</Button>
      </View>
    );
  }
}
