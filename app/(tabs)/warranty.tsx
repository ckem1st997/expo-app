import { Alert, StyleSheet } from "react-native";

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
import * as Notifications from "expo-notifications";
import { SchedulableTriggerInputTypes } from "expo-notifications";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";
import { NotificationHelper } from "@/helper/NotificationHelper";
import { repositoryDelivery } from "@/constants/baseApi";
import { MessageResponse } from "@/model/MessageResponse";
import {
  Button,
  Card,
  H2,
  H5,
  Image,
  Paragraph,
  ScrollView,
  Spinner,
  XStack,
} from "tamagui";
import { Activity, Airplay } from "@tamagui/lucide-icons";

export default function WarrantyScreen() {
  const [randome, setRandom] = React.useState("");
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const fetchUser = async () => {
    try {
      const user = await repositoryDelivery.get<MessageResponse<any>>(
        "/api/v1/TblTestingTechniqueHeader/get-list?Take=20"
      );
      if (user?.httpStatusCode === 200) {
        setData(user.data);
        //  NotificationHelper.Success("Lấy dữ liệu thành công !");
        //setLoading(false);
      }
    } catch (e) {
      console.error("Fetch error:", e);
    }
  };

  useFocusEffect(
    // Callback should be wrapped in `React.useCallback` to avoid running the effect too often.
    useCallback(() => {
      // Invoked whenever the route is focused.
      setRandom(Math.random().toString());
      fetchUser();

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
      {loading ? (
        <Spinner size="large" color="$orange10" />
      ) : (
        <View>
          <Text style={styles.title}>Tab Two 1</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles.title}> Randome :{randome}</Text>

          <Button
            onPress={() => {
              NotificationHelper.Success("Lấy dữ liệu thành công !");
            }}
            iconAfter={Activity}
            icon={Airplay}
          >
            Fetch
          </Button>
          <Text>{process.env.EXPO_PUBLIC_BASE_API}</Text>
          <ScrollView
            maxHeight={1250}
            backgroundColor="$background"
            padding="$4"
            borderRadius="$4"
          >
            <XStack
              $sm={{ flexDirection: "column" }}
              paddingHorizontal="$4"
              space
            >
              {data &&
                data.map((item: any) => (
                  <Card key={item.id} elevate size="$4" bordered>
                    <Card.Header padded>
                      <H5>{item.branchName}</H5>
                      <Paragraph theme="alt2">{item.code}</Paragraph>
                    </Card.Header>
                    <Card.Footer padded>
                      <XStack flex={1} />
                      <Button borderRadius="$10">
                        {item.responsibleEmployee}
                      </Button>
                    </Card.Footer>
                    <Card.Background></Card.Background>
                  </Card>
                ))}
            </XStack>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    height: 1,
  },
});
