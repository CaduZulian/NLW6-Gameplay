import { Alert, Image, Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import { styles } from "./styles";

import DiscordSvg from "../../assets/discord.svg";
import IllustrationImg from "../../assets/illustration.png";

import { Background, ButtonIcon } from "../../components";
import { useAuth } from "../../hooks";

interface SignInProps {
  navigation: NavigationProp<any>;
}

export const SignIn = ({ navigation }: SignInProps) => {
  const { user, signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(String(error));
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se e{`\n`}e organize suas {`\n`}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title="Entrar com Discord"
            icon={DiscordSvg}
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
};
