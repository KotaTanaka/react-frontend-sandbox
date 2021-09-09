import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { API_ENDPOINT } from 'src/constants/api';
import { ActionType } from 'src/constants/enums';
import { IShopList } from 'src/interfaces/api/response/Shop';
import { useDispatch } from 'src/store/Context';
import { handleError } from 'src/utils/ApiUtil';

interface IUseGetShopsProps {
  isShopsLoading: boolean;
  fetchShopList: (signal?: CancelTokenSource) => Promise<void>;
}

/** 店舗一覧取得カスタムフック */
const useGetShops = (): IUseGetShopsProps => {
  const { dispatchShop } = useDispatch();
  const [isShopsLoading, setIsShopsLoading] = useState<boolean>(true);

  /** ページ描画時に取得 */
  useEffect(() => {
    const signal = axios.CancelToken.source();
    fetchShopList(signal);
    return () => signal.cancel('Cleanup.');
    // eslint-disable-next-line
  }, []);

  /**
   * 店舗一覧取得
   * @param signal CancelTokenSource
   */
  // prettier-ignore
  const fetchShopList = useCallback(async (signal?: CancelTokenSource): Promise<void> => {
    try {
      const response = await axios.get<IShopList>(API_ENDPOINT.SHOPS, {
        cancelToken: signal ? signal.token : axios.CancelToken.source().token,
      });

      dispatchShop({
        type: ActionType.SET_SHOP_LIST,
        payload: response.data,
      });
    } catch (err) {
      handleError(err);
    }

    setIsShopsLoading(false);
  }, [dispatchShop]);

  return { isShopsLoading, fetchShopList };
};

export default useGetShops;
