import { useState, useEffect } from "react";
import { createContext } from "react";

import * as authApi from "../api/auth-api";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (getAccessToken()) {
      authApi.getMe().then((res) => {
        setAuthUser(res.data.user);
      });
    }
  }, []);

  const login = async (credential) => {
    const res = await authApi.login(credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const register = async (credential) => {
    const res = await authApi.register({ credential });
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  //   const updateProfile = async data => {
  //     const res = await axios.patch('/user', data);
  //     setAuthUser({ ...authUser, ...res.data });
  //   };

  return (
    <AuthContext.Provider
      value={{
        login,
        authUser,
        register,
        logout,
        // updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
