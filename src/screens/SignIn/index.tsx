import { Image, Text, View } from "react-native";

import { styles } from "./styles";

import DiscordSvg from "../../assets/discord.svg";
import IllustrationImg from "../../assets/illustration.png";

import { ButtonIcon } from "../../components";

export const SignIn = ({ navigation }: any) => {
  const handleSignIn = () => {
    navigation.navigate("Home");
  };

  return (
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
  );
};
