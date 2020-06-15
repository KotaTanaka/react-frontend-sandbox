/** Wi-Fiサービス一リスト */
export interface IServiceList {
  serviceList: IService[];
  total: number;
}

/** Wi-Fiサービス一リスト要素 */
export interface IService {
  serviceId: number;
  wifiName: string;
  link: string;
  count: number;
}
