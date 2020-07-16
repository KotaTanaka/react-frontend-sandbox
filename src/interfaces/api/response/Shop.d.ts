// from app
import { IReview } from 'src/interfaces/api/response/Review';

/** 店舗情報 */
export interface IShop {
  shopId: number;
  shopName: string;
  area: string;
  description: string;
  address: string;
  access: string;
  SSID: string[];
  shopType: string;
  openingHours: string;
  seatsNum: number;
  hasPower: boolean;
  reviewCount: number;
  average: number;
}

/** 店舗リスト */
export interface IShopList {
  shopList: IShopListElement[];
  total: number;
}

/** 店舗リスト要素情報 */
export interface IShopListElement extends IShop {
  serviceId: number;
  wifiName: string;
}

/** 店舗情報詳細 */
export interface IShopDetail extends IShop {
  serviceId: number;
  wifiName: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  reviewList: IReview[];
}
