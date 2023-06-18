import { Component } from "react";
import "./app.scss";

class App extends Component {
  // 1.组件生命周期
  componentDidMount() {
    console.log("app componentDidMount");
  }

  // 2.应用App的生命周期
  onLaunch() {
    console.log("app onLaunch");
  }

  componentDidShow() {
    console.log("app componentDidShow");
  }

  componentDidHide() {
    console.log("app componentDidHide");
  }

  // 3.定义全局数据
  taroGlobalData = {
    name: "liujun",
    age: 18,
    id: 1010,
  };

  render() {
    // this.props.children 是将要会渲染的页面
    return this.props.children;
  }
}

export default App;
