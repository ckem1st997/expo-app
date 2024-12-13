import Repository from "@/helper/HttpHelper";

export const BASE_API = process.env.EXPO_PUBLIC_BASE_API;
export const BASE_API_SIGN = BASE_API + "/api-sign";
export const BASE_API_POS = BASE_API + "/api-pos";
export const BASE_API_MASTER = BASE_API + "/api-master";
export const BASE_API_MDM = BASE_API + "/api-mdm";
export const BASE_API_Log = BASE_API + "/api-logging";
export const BASE_API_DELIVERY = BASE_API + "/api-shipping";
export const BASE_API_PAYMENT = BASE_API + "/api-payment";

export const repositoryMaster = new Repository(BASE_API_MASTER);
export const repositoryPos = new Repository(BASE_API_POS);
export const repositoryMdm = new Repository(BASE_API_MDM);
export const repositoryLog = new Repository(BASE_API_Log);
export const repositoryDelivery = new Repository(BASE_API_DELIVERY);
export const repositoryPayment = new Repository(BASE_API_PAYMENT);
