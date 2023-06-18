import { Component } from "react";
import { View, Navigator, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

export default class Home extends Component {
  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  onLoad() {
    // 监听
    Taro.eventCenter.on(
      "acceptDataFormDatail03Page",
      this.acceptDataFormDatail03Page
    );
  }
  acceptDataFormDatail03Page(data) {
    console.log(data);
  }
  onUnload() {
    // 取消监听
    Taro.eventCenter.off(
      "acceptDataFormDatail03Page",
      this.acceptDataFormDatail03Page
    );
  }

  componentDidShow() {}

  componentDidHide() {}
  goToDetail01() {
    Taro.navigateTo({
      url: "/pages/detail01/index",
    });
  }
  goToDetail02() {
    Taro.redirectTo({
      url: "/pages/detail01/index",
    });
  }
  goToDetail03() {
    Taro.switchTab({
      url: "/pages/category/index",
    });
  }

  goToDetail04() {
    Taro.navigateTo({
      url: "/pages/detail01/index?name=liujun&id=100",

      success: function (res) {
        if (process.env.TARO_ENV === "weapp") {
          // 注意：这中方式只支持微信小程序端
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit("acceptDataFromHomePage", {
            data: "我是从home页面传递到detail01的数据",
          });
        }
      },
    });
  }

  goToDetail05() {
    Taro.navigateTo({
      url: "/pages/detail02/index",
      events: {
        // 注意：这中方式只支持微信小程序端
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromDetail02Page: function (data) {
          console.log(data);
        },
      },
    });
  }

  goToDetail06() {
    Taro.navigateTo({
      url: "/pages/detail03/index",
    });
  }

  goToDetail07() {
    Taro.navigateTo({
      url: "/pages/detail04/index",
    });
  }
  goToDetail08() {
    Taro.navigateTo({
      url: "/pages/detail05/index?name=liujun",
    });
  }

  render() {
    return (
      <View className="home">
        <View>1.页面跳转（组件）</View>
        <Navigator url="/pages/detail01/index" openType="navigate">
          <Button>goToDetail01 navigate </Button>
        </Navigator>
        <Navigator url="/pages/detail01/index" openType="redirect">
          <Button>goToDetail01 redirect</Button>
        </Navigator>
        <Navigator url="/pages/category/index" openType="switchTab">
          <Button>goToDetail01 switchTab</Button>
        </Navigator>

        <View>2.页面跳转（API）</View>
        <Button onClick={() => this.goToDetail01()}>
          goToDetail01 navigate
        </Button>
        <Button onClick={() => this.goToDetail02()}>
          goToDetail01 redirect
        </Button>
        <Button onClick={() => this.goToDetail03()}>
          goToDetail01 switchTab
        </Button>

        <View>3.页面传递参数（正向）</View>
        <Button onClick={() => this.goToDetail04()}>
          goToDetail01 navigate
        </Button>
        <View>4.页面传递参数（逆向）</View>
        <Button onClick={() => this.goToDetail05()}>
          goToDetail02 navigate
        </Button>
        <Button onClick={() => this.goToDetail06()}>
          goToDetail02 Taro.eventCenter
        </Button>
        <View>5.页面的生命周期</View>
        <Button onClick={() => this.goToDetail07()}>
          goToDetail04 class navigate
        </Button>
        <Button onClick={() => this.goToDetail08()}>
          goToDetail05 hooks navigate
        </Button>
      </View>
    );
  }
}
