import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuth: boolean;
  isHost: boolean;
  login: (isHost: boolean) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      isHost: false,
      login: (isHost) => {
        set({
          isAuth: true,
          isHost,
        });
      },

      logout: () => {
        set({
          isAuth: false,
          isHost: false,
        });
        localStorage.clear();
        document.cookie =
          "x-a=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.bazmino.com;";
      },
    }),
    {
      name: "auth-storage",
      // getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
