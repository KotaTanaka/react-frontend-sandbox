/** Global State */
export interface State {
  count: number;
}

/** アクション種別 */
export enum ActionType {
  SET_COUNT = 'SET_COUNT'
}

/** アクション */
export interface Action {
  type: ActionType;
  payload: any;
}

/** Reducer */
const Reducer = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_COUNT:
      return {
        ...state,
        count: payload
      };
    default:
      return state;
  }
};

export default Reducer;
