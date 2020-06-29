import { useCallback, useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';

// from app
import { API_ENDPOINT } from 'src/constants/api';
import { IShopList } from 'src/interfaces/api/response/Shop';
import { handleError } from 'src/utils/ApiUtil';

interface IUseGetShopsProps {
  shops: IShopList;
  isShopsLoading: boolean;
  fetchShopList: (signal?: CancelTokenSource) => Promise<void>;
}

/** 店舗一覧取得カスタムフック */
const useGetShops = (): IUseGetShopsProps => {
  const [isShopsLoading, setIsShopsLoading] = useState<boolean>(true);
  // prettier-ignore
  const [shops, setShops] = useState<IShopList>({ shopList: [], total: 0 });

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
      const response = await axios.get(API_ENDPOINT.SHOPS, {
        cancelToken: signal ? signal.token : axios.CancelToken.source().token,
      });

      setShops(response.data);
    } catch (err) {
      handleError(err);
    }

    setIsShopsLoading(false);
  }, []);

  return { shops, isShopsLoading, fetchShopList };
};

export default useGetShops;
