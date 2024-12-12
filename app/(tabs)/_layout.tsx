import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabOneScreen from ".";
import TabThreeScreen from "./tabt";
import TabTwoScreen from "./two";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const Stack = createNativeStackNavigator();
  const MyTabs = createBottomTabNavigator();

  return (
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
    //     // Disable the static render of the header on web
    //     // to prevent a hydration error in React Navigation v6.
    //     headerShown: useClientOnlyValue(false, true),
    //   }}
    // >
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: "Home",
    //       tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
    //       headerRight: () => (
    //         <Link href="/modal" asChild>
    //           <Pressable>
    //             {({ pressed }) => (
    //               <FontAwesome
    //                 name="info-circle"
    //                 size={25}
    //                 color={Colors[colorScheme ?? "light"].text}
    //                 style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
    //               />
    //             )}
    //           </Pressable>
    //         </Link>
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="two"
    //     options={{
    //       title: "Tab Two",
    //       tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="tabt"
    //     options={{
    //       title: "Tab three",
    //       tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    //     }}
    //   />
    // </Tabs>
    // <Stack.Navigator
    //   initialRouteName="tabt"
    //   screenOptions={{
    //     headerStyle: { backgroundColor: "tomato" },
    //     animation: "fade_from_bottom",
    //   }}
    // >
    //   <Stack.Screen
    //     name="index"
    //     component={TabOneScreen}
    //     options={{ headerShown: false }}
    //   />
    //   <Stack.Screen
    //     name="two"
    //     component={TabTwoScreen}
    //     options={{ headerShown: false}}
    //   />
    //   <Stack.Screen
    //     name="tabt"
    //     component={TabThreeScreen}
    //     options={{ headerShown: false}}
    //   />
    // </Stack.Navigator>
    <MyTabs.Navigator screenOptions={{ headerShown: false }}>
      <MyTabs.Screen name="index" component={TabOneScreen} />
      <MyTabs.Screen name="two" component={TabTwoScreen} />
      <MyTabs.Screen name="tabt" component={TabThreeScreen} />
    </MyTabs.Navigator>
  );
}
