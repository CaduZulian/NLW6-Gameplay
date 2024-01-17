import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import { styles } from "./style";

import { theme } from "../../global";

interface HeaderProps {
  title: string;
  action?: React.ReactNode;
}

export const Header = ({ title, action }: HeaderProps) => {
  const { secondary100, secondary40, heading } = theme.colors;

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  );
};
