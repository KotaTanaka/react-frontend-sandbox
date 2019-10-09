import React, { createContext, useReducer, useContext } from "react";

// from app
import Reducer, { State, Action } from "Reducer";

const initialState: State = {
  count: 0
};

const StoreContext = createContext<State>(initialState);
const DispatchContext = createContext<React.Dispatch<Action>>(() => true);

/** Provider */
const Provider = ({ children }: { children: any}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <StoreContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
};

/** GlobalState を更新するための関数 */
const useDispatch = () => {
  return useContext(DispatchContext);
};

/** GlobalState を参照するための関数 */
const useGlobalState = <K extends keyof State>(property: K) => {
  const state = useContext(StoreContext);
  return state[property];
};

export { StoreContext, Provider, useDispatch, useGlobalState };
