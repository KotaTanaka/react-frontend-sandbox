// from app
import { ActionType } from 'src/constants/enums';
import { IArea } from 'src/interfaces/api/response/Area';

/** Action */
export interface IAreaAction {
  type: ActionType.SET_AREA_LIST;
  payload: any;
}

/** State */
export interface IAreaState {
  areaList: IArea[];
}

/** Initial State */
export const areaInitialState: IAreaState = {
  areaList: [],
};

/** エリア関連 Reducer */
const AreaReducer = (state: IAreaState, action: IAreaAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_AREA_LIST:
      return {
        ...state,
        areaList: payload,
      };
    default:
      return state;
  }
};

export default AreaReducer;
