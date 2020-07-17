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
import shopReducer, {
  IShopState,
  IShopAction,
  shopInitialState,
} from 'src/reducers/ShopReducer';
import reviewReducer, {
  IReviewState,
  IReviewAction,
  reviewInitialState,
} from 'src/reducers/ReviewReducer';
import counterReducer, {
  ICounterState,
  ICounterAction,
  counterInitialState,
} from 'src/reducers/CounterReducer';

/** Action */
export interface IGlobalAction {
  area: IAreaAction;
  service: IServiceAction;
  shop: IShopAction;
  review: IReviewAction;
  counter: ICounterAction;
}

/** GlobalState */
export interface IGlobalState {
  area: IAreaState;
  service: IServiceState;
  shop: IShopState;
  review: IReviewState;
  counter: ICounterState;
}

/** Store */
const StoreContext = createContext<IGlobalState>({
  area: areaInitialState,
  service: serviceInitialState,
  shop: shopInitialState,
  review: reviewInitialState,
  counter: counterInitialState,
});

/** Dispatch */
const DispatchContext = createContext<{
  dispatchArea: React.Dispatch<IAreaAction>;
  dispatchService: React.Dispatch<IServiceAction>;
  dispatchShop: React.Dispatch<IShopAction>;
  dispatchReview: React.Dispatch<IReviewAction>;
  dispatchCounter: React.Dispatch<ICounterAction>;
}>({
  dispatchArea: () => true,
  dispatchService: () => true,
  dispatchShop: () => true,
  dispatchReview: () => true,
  dispatchCounter: () => true,
});

/** Provider */
// prettier-ignore
const Provider = ({ children }: { children: any }) => {
  const [areaState, areaDispatch] = useReducer(areaReducer, areaInitialState);
  const [serviceState, serviceDispatch] = useReducer(serviceReducer, serviceInitialState);
  const [shopState, shopDispatch] = useReducer(shopReducer, shopInitialState);
  const [reviewState, reviewDispatch] = useReducer(reviewReducer, reviewInitialState);
  const [counterState, counterDispatch] = useReducer(counterReducer, counterInitialState);

  return (
    <StoreContext.Provider
      value={{
        area: areaState,
        service: serviceState,
        shop: shopState,
        review: reviewState,
        counter: counterState,
      }}
    >
      <DispatchContext.Provider
        value={{
          dispatchArea: areaDispatch,
          dispatchService: serviceDispatch,
          dispatchShop: shopDispatch,
          dispatchReview: reviewDispatch,
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
