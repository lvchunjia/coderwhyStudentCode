import { Component } from "react";
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

export default class Detail03 extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  goBack() {
    Taro.navigateBack({
      delta: 1,
    });

    // 触发一个全局事件
    Taro.eventCenter.trigger("acceptDataFormDatail03Page", {
      data: "将detail03的数据传递到home页面",
    });
  }
  render() {
    return (
      <View className="detail03">
        <Button onClick={() => this.goBack()}>返回</Button>
      </View>
    );
  }
}
