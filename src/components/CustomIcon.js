// @flow
import React, { PureComponent } from "react";
import customIcons from "../assets/icons";
import { Image } from "react-native";

type Props = {
  focused?: boolean,
  name: string,
  size: number,
  style?: Object
};

class CustomIcon extends PureComponent<Props> {
  render() {
    const { focused, name, size, style } = this.props;
    console.log(this.props);
    let source = name;
    focused && (source += "Active");

    return (
      <Image
        source={customIcons[source]}
        style={{ ...style, height: size, width: size }}
      />
    );
  }
}

export default CustomIcon;
