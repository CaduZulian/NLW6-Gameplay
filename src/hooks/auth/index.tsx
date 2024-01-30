import React, { createContext, useContext, useState, useEffect } from "react";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

const {
  EXPO_PUBLIC_REDIRECT_URI,
  EXPO_PUBLIC_SCOPE,
  EXPO_PUBLIC_RESPONSE_TYPE,
  EXPO_PUBLIC_CLIENT_ID,
  EXPO_PUBLIC_CDN_IMAGE,
} = process.env;

import { api } from "../../services/api";
import { COLLECTION_USERS } from "../../configs/database";

interface User {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  const [signInResponse, signInResult, signInAsync] =
    AuthSession.useAuthRequest(
      {
        clientId: EXPO_PUBLIC_CLIENT_ID || "",
        scopes: EXPO_PUBLIC_SCOPE?.split("+"),
        redirectUri: AuthSession.makeRedirectUri({
        }),
        responseType: EXPO_PUBLIC_RESPONSE_TYPE,
      },
      { authorizationEndpoint: `${api.defaults.baseURL}/oauth2/authorize` }
    );

  // console.log(signInResponse, signInResult);

  async function signIn() {
    try {
      setLoading(true);

      const result = await signInAsync();

      console.log(result);

      if (result?.type === "success" && !result?.params.error) {
        api.defaults.headers.authorization = `Bearer ${result.params.access_token}`;

        const userInfo = await api.get("/users/@me");

        const firstName = userInfo.data.username.split(" ")[0];
        userInfo.data.avatar = `${EXPO_PUBLIC_CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        const userData = {
          ...userInfo.data,
          firstName,
          token: result.params.access_token,
        };

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
        setUser(userData);
      }
    } catch (error) {
      console.log(error);
      throw new Error("Não foi possível autenticar");
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(COLLECTION_USERS);
  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storage) {
      const userLogged = JSON.parse(storage) as User;
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

      setUser(userLogged);
    }
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
