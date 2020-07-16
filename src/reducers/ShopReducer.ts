// from app
import { ActionType } from 'src/constants/enums';
import { IShop } from 'src/interfaces/api/response/Shop';

/** Action */
export interface IShopAction {
  type: ActionType.SET_SHOP_LIST;
  payload: any;
}

/** State */
export interface IShopState {
  shopList: IShop[];
  total: number;
}

/** Initial State */
export const shopInitialState: IShopState = {
  shopList: [],
  total: 0,
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
    default:
      return state;
  }
};

export default ShopReducer;
