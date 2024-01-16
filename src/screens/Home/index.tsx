import { useState } from "react";
import { View } from "react-native";

import { styles } from "./styles";

import {
  Appointment,
  ButtonAdd,
  CategorySelect,
  ListDivider,
  ListHeader,
  Profile,
} from "../../components";
import { FlatList } from "react-native-gesture-handler";

export const Home = () => {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />

        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          style={styles.matches}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </View>
    </View>
  );
};
