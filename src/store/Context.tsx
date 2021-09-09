import { createContext, useContext, useReducer } from 'react';
import areaReducer, {
  areaInitialState,
  IAreaAction,
  IAreaState,
} from 'src/store/reducers/AreaReducer';
import counterReducer, {
  counterInitialState,
  ICounterAction,
  ICounterState,
} from 'src/store/reducers/CounterReducer';
import reviewReducer, {
  IReviewAction,
  IReviewState,
  reviewInitialState,
} from 'src/store/reducers/ReviewReducer';
import serviceReducer, {
  IServiceAction,
  IServiceState,
  serviceInitialState,
} from 'src/store/reducers/ServiceReducer';
import shopReducer, {
  IShopAction,
  IShopState,
  shopInitialState,
} from 'src/store/reducers/ShopReducer';

/** Action */
export interface IGlobalAction {
  area: IAreaAction;
  service: IServiceAction;
  shop: IShopAction;
  review: IReviewAction;
  counter: ICounterAction;
}

/** StoreState */
export interface IStoreState {
  area: IAreaState;
  service: IServiceState;
  shop: IShopState;
  review: IReviewState;
  counter: ICounterState;
}

/** Store */
const StoreContext = createContext<IStoreState>({
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
const useStore = <K extends keyof IStoreState>(property: K) => {
  const state = useContext(StoreContext);
  return state[property];
};

export { StoreContext, Provider, useDispatch, useStore };