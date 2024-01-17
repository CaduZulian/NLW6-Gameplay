import { useState } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

import {
  Background,
  Button,
  CategorySelect,
  GuildIcon,
  GuildProps,
  Header,
  ModalView,
  SmallInput,
  TextArea,
} from "../../components";

import { theme } from "../../global";
import { Guilds } from "../Guilds";

export const AppointmentCreate = () => {
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const handleOpenGuilds = () => {
    setOpenGuildsModal((prevState) => !prevState);
  };

  const handleGuildSelect = (guildSelect: GuildProps) => {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Background>
        <Header title="Agendar partida" />

        <ScrollView>
          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            setCategory={setCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.id ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <View style={styles.image} />
                )}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : "Selecione um servidor"}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />

                  <Text style={styles.divider}>/</Text>

                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Hora e minuto</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />

                  <Text style={styles.divider}>:</Text>

                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>

              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </ScrollView>

        <ModalView visible={openGuildsModal} closeModal={handleOpenGuilds}>
          <Guilds handleGuildSelect={handleGuildSelect} />
        </ModalView>
      </Background>
    </KeyboardAvoidingView>
  );
};
