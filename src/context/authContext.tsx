"use client";
import { auth, db } from "@/firebase/firebase";
import { GetCookie } from "@/hooks/cookies";
import { middleware } from "@/middleware";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export type UserInfo = {
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  work_email: string;
};

export const AuthContext = createContext<{
  userInfo: UserInfo;
  setUserInfo: Dispatch<SetStateAction<UserInfo>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}>({
  userInfo: {
    avatar: "",
    email: "",
    first_name: "",
    last_name: "",
    work_email: "",
  },
  setUserInfo: () => {},
  token: "",
  setToken: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfo>(
    JSON.parse(GetCookie("User") || "false") || {}
  );
  const [token, setToken] = useState<string>(
    JSON.parse(GetCookie("Token") || "false") || ""
  );

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
