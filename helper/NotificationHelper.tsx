import { ALERT_TYPE, Toast } from "react-native-alert-notification";
function Success(
  noti: string,
  onPress?: () => void,
  onShow?: () => void,
  onHide?: () => void
) {
  BaseShow(noti, ALERT_TYPE.SUCCESS, onPress, onShow, onHide);
}
function Fails(
  noti: string,
  onPress?: () => void,
  onShow?: () => void,
  onHide?: () => void
) {
  BaseShow(noti, ALERT_TYPE.DANGER, onPress, onShow, onHide);
}

function Info(
  noti: string,
  onPress?: () => void,
  onShow?: () => void,
  onHide?: () => void
) {
  BaseShow(noti, ALERT_TYPE.INFO, onPress, onShow, onHide);
}

function Warn(
  noti: string,
  onPress?: () => void,
  onShow?: () => void,
  onHide?: () => void
) {
  BaseShow(noti, ALERT_TYPE.WARNING, onPress, onShow, onHide);
}

function BaseShow(
  message: string,
  type: ALERT_TYPE,
  onPress?: () => void,
  onShow?: () => void,
  onHide?: () => void
) {
  Toast.show({
    type: type,
    title: "Thông báo !",
    textBody: message,
    onPress: onPress,
    onShow: onShow,
    onHide: onHide,
    autoClose: 5000,
    textBodyStyle: {
      //  fontSize: 26,
    },
    titleStyle: {
      fontSize: 15,
    },
  });
}

export const NotificationHelper = {
  Success,
  Fails,
  Info,
  Warn,
};
