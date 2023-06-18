import { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default class Profile extends Component {
  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="profile">
        <Text>Hello world!</Text>
      </View>
    );
  }
}
