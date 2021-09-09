import { ActionType } from 'src/constants/enums';

/** Action */
export interface ICounterAction {
  type: ActionType.SET_COUNT;
  payload: any;
}

/** State */
export interface ICounterState {
  count: number;
}

/** Initial State */
export const counterInitialState: ICounterState = {
  count: 0,
};

/** カウンター Reducer */
const CounterReducer = (state: ICounterState, action: ICounterAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_COUNT:
      return {
        ...state,
        count: payload,
      };
    default:
      return state;
  }
};

export default CounterReducer;
