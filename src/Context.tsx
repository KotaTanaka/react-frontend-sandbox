import React, { createContext, useReducer, useContext } from 'react';

// from app
import areaReducer, {
  IAreaState,
  IAreaAction,
  areaInitialState,
} from 'src/reducers/AreaReducer';
import serviceReducer, {
  IServiceState,
  IServiceAction,
  serviceInitialState,
} from 'src/reducers/ServiceReducer';
import counterReducer, {
  ICounterState,
  ICounterAction,
  counterInitialState,
} from 'src/reducers/CounterReducer';

/** Action */
export interface IGlobalAction {
  area: IAreaAction;
  service: IServiceAction;
  counter: ICounterAction;
}

/** GlobalState */
export interface IGlobalState {
  area: IAreaState;
  service: IServiceState;
  counter: ICounterState;
}

/** Store */
const StoreContext = createContext<IGlobalState>({
  area: areaInitialState,
  service: serviceInitialState,
  counter: counterInitialState,
});

/** Dispatch */
const DispatchContext = createContext<{
  dispatchArea: React.Dispatch<IAreaAction>;
  dispatchService: React.Dispatch<IServiceAction>;
  dispatchCounter: React.Dispatch<ICounterAction>;
}>({
  dispatchArea: () => true,
  dispatchService: () => true,
  dispatchCounter: () => true,
});

/** Provider */
const Provider = ({ children }: { children: any }) => {
  const [areaState, areaDispatch] = useReducer(areaReducer, areaInitialState);
  const [serviceState, serviceDispatch] = useReducer(
    serviceReducer,
    serviceInitialState,
  );
  const [counterState, counterDispatch] = useReducer(
    counterReducer,
    counterInitialState,
  );

  return (
    <StoreContext.Provider
      value={{ area: areaState, service: serviceState, counter: counterState }}
    >
      <DispatchContext.Provider
        value={{
          dispatchArea: areaDispatch,
          dispatchService: serviceDispatch,
          dispatchCounter: counterDispatch,
        }}
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
