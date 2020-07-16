// from app
import { ActionType } from 'src/constants/enums';
import {
  IShopListElement,
  IShopDetail,
} from 'src/interfaces/api/response/Shop';

/** Action */
export interface IShopAction {
  type: ActionType.SET_SHOP_LIST | ActionType.SET_SHOP_DETAIL;
  payload: any;
}

/** State */
export interface IShopState {
  shopList: IShopListElement[];
  total: number;
  shopDetail: IShopDetail;
}

/** Initial State */
export const shopInitialState: IShopState = {
  shopList: [],
  total: 0,
  shopDetail: {
    shopId: 0,
    shopName: '',
    area: '',
    description: '',
    address: '',
    access: '',
    SSID: [],
    shopType: '',
    openingHours: '',
    seatsNum: 0,
    hasPower: false,
    reviewCount: 0,
    average: 0,
    serviceId: 0,
    wifiName: '',
    createdAt: '',
    updatedAt: '',
    deletedAt: '',
    reviewList: [],
  },
};

/** 店舗関連 Reducer */
const ShopReducer = (state: IShopState, action: IShopAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_SHOP_LIST:
      return {
        ...state,
        shopList: payload.shopList,
        total: payload.total,
      };
    case ActionType.SET_SHOP_DETAIL:
      return {
        ...state,
        shopDetail: payload,
      };
    default:
      return state;
  }
};

export default ShopReducer;
