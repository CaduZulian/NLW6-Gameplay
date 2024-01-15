import { Button, Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "./style";

import DiscordImg from "../../assets/discord.png";
import IllustrationImg from "../../assets/illustration.png";

import { ButtonIcon } from "../../components";

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com Discord"
          icon={DiscordImg}
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
};
