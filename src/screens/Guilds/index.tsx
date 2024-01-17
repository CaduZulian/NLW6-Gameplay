import { FlatList, View } from "react-native";

import { styles } from "./styles";

import { Guild, GuildProps, ListDivider } from "../../components";

interface GuildsProps {
  handleGuildSelect: (guild: GuildProps) => void;
}

export const Guilds = ({ handleGuildSelect }: GuildsProps) => {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "2",
      name: "Galera do Game",
      icon: null,
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
};
