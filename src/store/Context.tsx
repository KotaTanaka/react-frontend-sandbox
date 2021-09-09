import { createContext, useContext, useReducer } from 'react';
import * as AreaReducer from 'src/store/reducers/AreaReducer';
import * as CounterReducer from 'src/store/reducers/CounterReducer';
import * as ReviewReducer from 'src/store/reducers/ReviewReducer';
import * as ServiceReducer from 'src/store/reducers/ServiceReducer';
import * as ShopReducer from 'src/store/reducers/ShopReducer';

/** StoreAction */
interface IStoreAction {
  area: AreaReducer.IAreaAction;
  service: ServiceReducer.IServiceAction;
  shop: ShopReducer.IShopAction;
  review: ReviewReducer.IReviewAction;
  counter: CounterReducer.ICounterAction;
}

/** StoreState */
interface IStoreState {
  area: AreaReducer.IAreaState;
  service: ServiceReducer.IServiceState;
  shop: ShopReducer.IShopState;
  review: ReviewReducer.IReviewState;
  counter: CounterReducer.ICounterState;
}

/** StoreContext */
const StoreContext = createContext<IStoreState>({
  area: AreaReducer.areaInitialState,
  service: ServiceReducer.serviceInitialState,
  shop: ShopReducer.shopInitialState,
  review: ReviewReducer.reviewInitialState,
  counter: CounterReducer.counterInitialState,
});

/** DispatchContext */
const DispatchContext = createContext<{
  dispatchArea: React.Dispatch<IStoreAction['area']>;
  dispatchService: React.Dispatch<IStoreAction['service']>;
  dispatchShop: React.Dispatch<IStoreAction['shop']>;
  dispatchReview: React.Dispatch<IStoreAction['review']>;
  dispatchCounter: React.Dispatch<IStoreAction['counter']>;
}>({
  dispatchArea: () => true,
  dispatchService: () => true,
  dispatchShop: () => true,
  dispatchReview: () => true,
  dispatchCounter: () => true,
});

/** Provider */
// prettier-ignore
const Provider = ({ children }: { children: React.ReactNode }) => {
  const [area, dispatchArea] = useReducer(AreaReducer.default, AreaReducer.areaInitialState);
  const [service, dispatchService] = useReducer(ServiceReducer.default, ServiceReducer.serviceInitialState);
  const [shop, dispatchShop] = useReducer(ShopReducer.default, ShopReducer.shopInitialState);
  const [review, dispatchReview] = useReducer(ReviewReducer.default, ReviewReducer.reviewInitialState);
  const [counter, dispatchCounter] = useReducer(CounterReducer.default, CounterReducer.counterInitialState);

  return (
    <StoreContext.Provider
      value={{
        area,
        service,
        shop,
        review,
        counter,
      }}
    >
      <DispatchContext.Provider
        value={{
          dispatchArea,
          dispatchService,
          dispatchShop,
          dispatchReview,
          dispatchCounter,
        }}
      >
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
};

/** StoreState を更新するための関数 */
const useDispatch = () => {
  return useContext(DispatchContext);
};

/** StoreState を参照するための関数 */
const useStore = <K extends keyof IStoreState>(property: K) => {
  const state = useContext(StoreContext);
  return state[property];
};

export { StoreContext, Provider, useDispatch, useStore };
