import React from "react";
import { Text, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

interface ButtonIconProps extends RectButtonProps {
  icon: React.FC<SvgProps>;
  title: string;
}

export const ButtonIcon = ({ title, icon: Icon, ...rest }: ButtonIconProps) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Icon />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};
