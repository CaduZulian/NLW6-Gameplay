import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global";

export const ButtonAdd = ({ ...rest }: RectButtonProps) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        size={24}
        color={theme.colors.heading}
      />
    </RectButton>
  );
};
