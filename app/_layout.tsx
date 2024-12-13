import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import * as Notifications from "expo-notifications";

import { useColorScheme } from "@/components/useColorScheme";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { createTamagui, TamaguiProvider } from "tamagui";
import defaultConfig from "@tamagui/config/v3";
import TabOneScreen from "./(tabs)";
import ShippingScreen from "./(tabs)/shipping";
import TechniqueScreen from "./(tabs)/technique";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}
///mơ modal thì cần nút back trên đầu

function RootLayoutNav() {
  //  const colorScheme = useColorScheme();
  var colorScheme = "light";

  const config = createTamagui(defaultConfig);
  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AlertNotificationRoot theme={colorScheme === "dark" ? "light" : "dark"}>
        <TamaguiProvider config={config}>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false, animation: "slide_from_bottom" }}
            />
            {/* <Tab.Navigator
              screenOptions={{ headerShown: false, animation: "shift" }}
            >
              <Tab.Screen name="index" component={TabOneScreen} />
              <Tab.Screen name="ship" component={ShippingScreen} />
              <Tab.Screen name="tec" component={TechniqueScreen} />
            </Tab.Navigator> */}
            <Stack.Screen
              name="modal"
              options={{
                presentation: "fullScreenModal",
                animation: "slide_from_left",
              }}
            />
          </Stack>
        </TamaguiProvider>
      </AlertNotificationRoot>
    </ThemeProvider>
  );
}
