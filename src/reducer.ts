/** Global State */
export interface IGlobalState {
  count: number;
}

/** アクション種別 */
export enum ActionType {
  SET_COUNT = 'SET_COUNT'
}

/** アクション */
export interface IAction {
  type: ActionType;
  payload: any;
}

/** Reducer */
const reducer = (state: IGlobalState, action: IAction) => {
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

export default reducer;
