import { FlatList, ImageBackground, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { styles } from "./styles";

import DiscordSvg from "../../assets/discord.svg";
import BannerImg from "../../assets/banner.png";

import {
  Background,
  ButtonIcon,
  Header,
  ListDivider,
  ListHeader,
  Member,
} from "../../components";

import { theme } from "../../global";

export const AppointmentDetails = () => {
  const members = [
    {
      id: "1",
      username: "Rodrigo",
      avatar_url: "https://github.com/caduzulian.png",
      status: "online",
    },
    {
      id: "2",
      username: "Rodrigo",
      avatar_url: "https://github.com/caduzulian.png",
      status: "offline",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" icon={DiscordSvg} />
      </View>
    </Background>
  );
};
