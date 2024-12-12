import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import React, { useCallback, useEffect } from "react";
import { Link, useFocusEffect } from "expo-router";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function TabThreeScreen() {
  const [randome, setRandom] = React.useState("");

  useFocusEffect(
    // Callback should be wrapped in `React.useCallback` to avoid running the effect too often.
    useCallback(() => {
      // Invoked whenever the route is focused.
      setRandom(Math.random().toString());

      // Return function is invoked whenever the route gets out of focus.
      return () => {
        console.log("This route is now unfocused.");
      };
    }, [])
  );
  const randomWidth = useSharedValue(10);
  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };
  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles1.box, style]} />

      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}> Randome :{randome}</Text>
      <Link
        href={{
          pathname: "/",
        }}
        style={{
          color: "blue",
        }}
      >
        Go to Tab One
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 80,
    backgroundColor: "black",
    margin: 30,
  },
});
