import React, { createContext, useReducer, useContext } from 'react';

// from app
import reducer, {
  ICounterState,
  ICounterAction,
  counterInitialState,
} from 'src/reducers/CounterReducer';
import areaReducer, {
  IAreaState,
  IAreaAction,
  areaInitialState,
} from 'src/reducers/AreaReducer';

/** Action */
export interface IGlobalAction {
  area: IAreaAction;
  counter: ICounterAction;
}

/** GlobalState */
export interface IGlobalState {
  area: IAreaState;
  counter: ICounterState;
}

/** Store */
const StoreContext = createContext<IGlobalState>({
  area: areaInitialState,
  counter: counterInitialState,
});

/** Dispatch */
const DispatchContext = createContext<{
  dispatchArea: React.Dispatch<IAreaAction>;
  dispatchCounter: React.Dispatch<ICounterAction>;
}>({ dispatchArea: () => true, dispatchCounter: () => true });

/** Provider */
const Provider = ({ children }: { children: any }) => {
  const [areaState, areaDispatch] = useReducer(areaReducer, areaInitialState);
  const [counterState, counterDispatch] = useReducer(
    reducer,
    counterInitialState,
  );

  return (
    <StoreContext.Provider value={{ area: areaState, counter: counterState }}>
      <DispatchContext.Provider
        value={{ dispatchArea: areaDispatch, dispatchCounter: counterDispatch }}
      >
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
