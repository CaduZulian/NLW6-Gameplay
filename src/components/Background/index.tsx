import { LayoutChangeEvent } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";

import { theme } from "../../global";

interface BackgroundProps {
  children: React.ReactNode;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
}

export const Background = ({ children, ...rest }: BackgroundProps) => {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
      {...rest}
    >
      {children}
    </LinearGradient>
  );
};
