// from app
import { ActionType } from 'src/constants/enums';
import { IService } from 'src/interfaces/api/response/Service';

/** Action */
export interface IServiceAction {
  type: ActionType.SET_SERVICE_LIST;
  payload: any;
}

/** State */
export interface IServiceState {
  serviceList: IService[];
  total: number;
}

/** Initial State */
export const serviceInitialState: IServiceState = {
  serviceList: [],
  total: 0,
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
    default:
      return state;
  }
};

export default ServiceReducer;
