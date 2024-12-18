import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DarkTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "nativewind";

import "../global.css";
import { MyLightTheme } from "../utilities/themeOptions";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useRouter } from "expo-router";

export default function Layout() {
  const router = useRouter();

  const { colorScheme, setColorScheme } = useColorScheme();
    useEffect(() => {
    const loadTheme = async () => {
      // await AsyncStorage.removeItem('theme');
      const stored = (await AsyncStorage.getItem("theme")) as ThemeOptions;
      if (stored) {
        setColorScheme(stored);
      } else {
        // Default to light if nothing or unexpected value is stored
        setColorScheme("dark");
      }
    };

    loadTheme();
  }, [colorScheme]);
  
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : MyLightTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="(tabs)"
            options={{
              headerTransparent: true,
              drawerLabel: "Home",
              title: "",
            }}
          />
          <Drawer.Screen
            name="settings"
            options={{
              drawerLabel: "Settings",
              title: "Settings",
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}