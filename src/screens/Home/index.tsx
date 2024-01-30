import { useState } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";

import { styles } from "./styles";

import {
  Appointment,
  Background,
  ButtonAdd,
  CategorySelect,
  ListDivider,
  ListHeader,
  Profile,
} from "../../components";

interface HomeProps {
  navigation: NavigationProp<any>;
}

export const Home = ({ navigation }: HomeProps) => {
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

  const handleAppointmentDetails = () => {
    navigation.navigate("AppointmentDetails");
  };

  const handleAppointmentCreate = () => {
    navigation.navigate("AppointmentCreate");
  };

  return (
    <Background>
      <View style={styles.header}>
        <Profile />

        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />


        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          style={styles.matches}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 69 }}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => (
            <Appointment data={item} onPress={handleAppointmentDetails} />
          )}
        />

    </Background>
  );
};
