import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Link, useNavigation } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function TabOneScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Link href="/modal" asChild>
        <Pressable>
          <FontAwesome
            name="info-circle"
            size={25}
            color={Colors["light"].text}
            style={{ marginRight: 15, opacity: 0.5 }}
          />
        </Pressable>
      </Link>

      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    // fontSize: 20,
    // fontWeight: "bold",
  },
  separator: {
    // marginVertical: 30,
    // height: 1,
    // width: "80%",
  },
});
