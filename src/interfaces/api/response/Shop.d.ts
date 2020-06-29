/** 店舗リスト */
export interface IShopList {
  shopList: IShop[];
  total: number;
}

/** 店舗リスト要素 */
export interface IShop {
  shopId: number;
  serviceId: number;
  wifiName: string;
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
