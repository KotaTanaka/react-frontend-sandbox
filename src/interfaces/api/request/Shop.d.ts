/** 店舗登録リクエストボディ */
export interface IRegisterShopBody {
  serviceId: number;
  shopName: string;
  area: string;
  description: string;
  address: string;
  access: string;
  ssid: string[];
  shopType: string;
  openingHours: string;
  seatsNum: number;
  hasPower: boolean;
}
