import React, { createContext, useReducer, useContext } from 'react';

// from app
import reducer, { IGlobalState, IAction } from 'src/reducer';

const initialState: IGlobalState = {
  count: 0,
};

const StoreContext = createContext<IGlobalState>(initialState);
const DispatchContext = createContext<React.Dispatch<IAction>>(() => true);

/** Provider */
const Provider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
const useGlobalState = <K extends keyof IGlobalState>(property: K) => {
  const state = useContext(StoreContext);
  return state[property];
};

export { StoreContext, Provider, useDispatch, useGlobalState };
