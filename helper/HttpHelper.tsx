// import axios, {
//   AxiosInstance,
//   AxiosResponse,
//   AxiosRequestConfig,
//   AxiosError,
// } from "axios";

// import { NotificationExtension } from "../extension/NotificationExtension";
// import { modals } from "@mantine/modals";
// import { IAuthProvider } from "../model/_base/AuthProvider";
// import { AuthProvider } from "./IAuthProvider";
// import { nprogress } from "@mantine/nprogress";
// import { notifications } from "@mantine/notifications";

// class Repository {
//   private axiosInstance: AxiosInstance;
//   constructor(baseURL?: string) {
//     const token = localStorage.getItem("token");
//     if (!baseURL) throw Error("Lỗi base url env !");
//     this.axiosInstance = axios.create({
//       baseURL,
//       headers: {
//         Authorization: `Bearer ${token?.replace(`"`, "").replace(`"`, "")}`,
//       },
//     });
//   }
//   public async get<T = any>(url: string, notShowMessenger?: boolean) {
//     // if (url.includes("all") || url.includes("get-list")) {
//     //   const user = localStorage.getItem("userName");
//     //   await this.PubNotication(user + " Get Data " + extractInfo(url));
//     // }
//     notifications.clean();
//     nprogress.start();
//     const token = localStorage.getItem("token");
//     await Delay(2500);

//     try {
//       var res = await this.axiosInstance.get<T>(url, {
//         headers: {
//           Authorization: `Bearer ${token?.replace(`"`, "").replace(`"`, "")}`,
//         },
//       });
//       return res.data;
//     } catch (error: any) {
//       if (!notShowMessenger) {
//         await this.HanderResponse(error);
//       }
//       //  return null;
//     } finally {
//       nprogress.complete();
//     }
//   }

//   public async post<T = any>(url: string, data?: any) {
//     // await this.PubNotication("Post Data " + extractInfo(url));
//     notifications.clean();
//     nprogress.start();
//     await Delay(500);
//     const token = localStorage.getItem("token");
//     try {
//       var res = await this.axiosInstance.post<T>(url, data, {
//         headers: {
//           Authorization: `Bearer ${token?.replace(`"`, "").replace(`"`, "")}`,
//         },
//       });
//       return res.data;
//     } catch (error: any) {
//       await this.HanderResponse(error);
//       //   return null;
//     } finally {
//       nprogress.complete();
//     }
//   }

//   public async put<T = any>(url: string, data?: any) {
//     notifications.clean();
//     nprogress.start();
//     await Delay(1000);
//     const token = localStorage.getItem("token");
//     try {
//       var res = await this.axiosInstance.put<T>(url, data, {
//         headers: {
//           Authorization: `Bearer ${token?.replace(`"`, "").replace(`"`, "")}`,
//         },
//       });
//       return res.data;
//     } catch (error: any) {
//       await this.HanderResponse(error);
//       // return null;
//     } finally {
//       nprogress.complete();
//     }
//   }

//   private async HanderResponse(res: any) {
//     const currentURL = window.location.pathname;
//     if (res.code === "ERR_NETWORK")
//       NotificationExtension.Fails("Máy chủ không thể kết nối !");
//     switch (res.response?.status) {
//       case 401:
//         // const _sso =
//         //   BASE_SSO + "/" + "?callback=" + window.location.origin + "/";
//         // console.log(_sso);
//         NotificationExtension.Fails("Xin vui lòng đăng nhập lại !");
//         await Delay(1000);
//         // window.location.href = "/auth/login?callback=" + currentURL;
//         modals.closeAll();
//         //  window.location.href = _sso;

//         break;
//       case 404:
//         NotificationExtension.Fails(
//           res?.response?.data?.message ?? "Api không tồn tại !"
//         );
//         //  modals.closeAll();
//         break;
//       // throw new Response("Trang web không tồn tại !", {
//       //   status: res.response?.status,
//       // });
//       case 403:
//         NotificationExtension.Fails("Bạn không có quyền !");
//         modals.closeAll();
//         break;
//       case 415:
//         NotificationExtension.Fails("Dữ liệu gửi tới máy chủ không phù hợp !");
//         //  modals.closeAll();
//         break;
//       case 500:
//         let _message = "Có lỗi xảy ra ở máy chủ, xin vui lòng thử lại!";
//         if (
//           res?.response?.data.errors &&
//           res?.response?.data.errors?.msg?.length > 0
//         )
//           _message = res?.response?.data.errors?.msg[0];
//         else if (res?.response?.data?.message)
//           _message = res?.response?.data?.message;
//         NotificationExtension.Fails(_message);
//         break;
//       default:
//         break;
//     }
//   }
// }

// export default Repository;
