// from app
import { IShop } from 'src/interfaces/api/response/Shop';

/** Wi-Fiサービス情報 */
export interface IService {
  serviceId: number;
  wifiName: string;
  link: string;
  shopCount: number;
}

/** Wi-Fiサービスリスト */
export interface IServiceList {
  serviceList: IServiceListElement[];
  total: number;
}
/** Wi-Fiサービスリスト要素 */
export type IServiceListElement = IService;

/** Wi-Fiサービス情報詳細 */
export interface IServiceDetail extends IService {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  shopList: IShop[];
}
