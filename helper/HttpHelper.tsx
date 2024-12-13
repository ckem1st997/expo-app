import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError,
} from "axios";
import { NotificationHelper } from "./NotificationHelper";

class Repository {
  private axiosInstance: AxiosInstance;
  constructor(baseURL?: string) {
    // const token = localStorage.getItem("token");
    if (!baseURL) throw Error("Lỗi base url env !");
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        //  Authorization: `Bearer ${token?.replace(`"`, "").replace(`"`, "")}`,
      },
    });
  }
  public async get<T = any>(url: string, notShowMessenger?: boolean) {
    // const token = localStorage.getItem("token");

    try {
      var res = await this.axiosInstance.get<T>(url, {
        headers: {
          //  Authorization: `Bearer ${token?.replace(`"`, "").replace(`"`, "")}`,
        },
      });
      return res.data;
    } catch (error: any) {
      if (!notShowMessenger) {
        await this.HanderResponse(error);
      }
      //  return null;
    } finally {
    }
  }

  public async post<T = any>(url: string, data?: any) {
    // await this.PubNotication("Post Data " + extractInfo(url));
    // const token = localStorage.getItem("token");
    try {
      var res = await this.axiosInstance.post<T>(url, data, {
        headers: {
          // Authorization: `Bearer ${token?.replace(`"`, "").replace(`"`, "")}`,
        },
      });
      return res.data;
    } catch (error: any) {
      await this.HanderResponse(error);
      //   return null;
    } finally {
    }
  }

  public async put<T = any>(url: string, data?: any) {
    // const token = localStorage.getItem("token");
    try {
      var res = await this.axiosInstance.put<T>(url, data, {
        headers: {
          //   Authorization: `Bearer ${token?.replace(`"`, "").replace(`"`, "")}`,
        },
      });
      return res.data;
    } catch (error: any) {
      await this.HanderResponse(error);
      // return null;
    } finally {
    }
  }

  private async HanderResponse(res: any) {
    const currentURL = window.location.pathname;
    if (res.code === "ERR_NETWORK")
      NotificationHelper.Fails("Máy chủ không thể kết nối !");
    switch (res.response?.status) {
      case 401:
        // const _sso =
        //   BASE_SSO + "/" + "?callback=" + window.location.origin + "/";
        // console.log(_sso);
        NotificationHelper.Fails("Xin vui lòng đăng nhập lại !");
        break;
      case 404:
        NotificationHelper.Fails(
          res?.response?.data?.message ?? "Api không tồn tại !"
        );
        //  modals.closeAll();
        break;
      // throw new Response("Trang web không tồn tại !", {
      //   status: res.response?.status,
      // });
      case 403:
        NotificationHelper.Fails("Bạn không có quyền !");
        break;
      case 415:
        NotificationHelper.Fails("Dữ liệu gửi tới máy chủ không phù hợp !");
        //  modals.closeAll();
        break;
      case 500:
        let _message = "Có lỗi xảy ra ở máy chủ, xin vui lòng thử lại!";
        if (
          res?.response?.data.errors &&
          res?.response?.data.errors?.msg?.length > 0
        )
          _message = res?.response?.data.errors?.msg[0];
        else if (res?.response?.data?.message)
          _message = res?.response?.data?.message;
        NotificationHelper.Fails(_message);
        break;
      default:
        break;
    }
  }
}

export default Repository;
