/**
 * Wi-Fiサービス一リスト
 * @author kotatanaka
 */
export interface IServiceList {
  serviceList: IService[];
  total: number;
}

/**
 * Wi-Fiサービス一リスト要素
 * @author kotatanaka
 */
export interface IService {
  serviceId: number;
  wifiName: string;
  link: string;
  count: number;
}
