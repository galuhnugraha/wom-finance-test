// src/services/auth.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateToken } from "../utils/jwt";

const TOKEN_KEY = "auth_token";
const EMAIL_KEY = "user_email";

export const login = async (email: string, password: string) => {
  if (password.length < 4) {
    throw new Error("Password minimal 4 karakter");
  }

  const token = generateToken(email);

  await AsyncStorage.setItem(TOKEN_KEY, token);
  await AsyncStorage.setItem(EMAIL_KEY, email);

  return token;
};

export const logout = async () => {
  await AsyncStorage.multiRemove([TOKEN_KEY, EMAIL_KEY]);
};

export const getSession = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  const email = await AsyncStorage.getItem(EMAIL_KEY);
  return { token, email };
};
