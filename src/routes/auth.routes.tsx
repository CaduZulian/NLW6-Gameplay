import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { theme } from "../global";

import {
  AppointmentCreate,
  AppointmentDetails,
  Home,
  SignIn,
} from "../screens";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  );
};
