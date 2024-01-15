import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./style";

interface ButtonIconProps extends TouchableOpacityProps {
  icon: ImageSourcePropType;
  title: string;
}

export const ButtonIcon = ({ title, icon, ...rest }: ButtonIconProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
