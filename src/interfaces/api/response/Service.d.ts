/** Wi-Fiサービスリスト */
export interface IServiceList {
  serviceList: IService[];
  total: number;
}

/** Wi-Fiサービスリスト要素 */
export interface IService {
  serviceId: number;
  wifiName: string;
  link: string;
  shopCount: number;
}
