// from app
import { ActionType } from 'src/constants/enums';
import {
  IServiceListElement,
  IServiceDetail,
} from 'src/interfaces/api/response/Service';

/** Action */
export interface IServiceAction {
  type: ActionType.SET_SERVICE_LIST | ActionType.SET_SERVICE_DETAIL;
  payload: any;
}

/** State */
export interface IServiceState {
  serviceList: IServiceListElement[];
  total: number;
  serviceDetail: IServiceDetail;
}

/** Initial State */
export const serviceInitialState: IServiceState = {
  serviceList: [],
  total: 0,
  serviceDetail: {
    serviceId: 0,
    wifiName: '',
    link: '',
    shopCount: 0,
    createdAt: '',
    updatedAt: '',
    deletedAt: '',
    shopList: [],
  },
};

/** Wi-Fiサービス関連 Reducer */
const ServiceReducer = (state: IServiceState, action: IServiceAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_SERVICE_LIST:
      return {
        ...state,
        serviceList: payload.serviceList,
        total: payload.total,
      };
    case ActionType.SET_SERVICE_DETAIL:
      return {
        ...state,
        serviceDetail: payload,
      };
    default:
      return state;
  }
};

export default ServiceReducer;
