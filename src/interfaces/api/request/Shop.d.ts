/** 店舗登録リクエストボディ */
export interface IRegisterShopBody {
  serviceId: number;
  area: string;
  ssid: string;
  shopName: string;
  description: string;
  address: string;
  shopType: string;
  openingHours: string;
  seatsNum: number;
  hasPower: boolean;
}
