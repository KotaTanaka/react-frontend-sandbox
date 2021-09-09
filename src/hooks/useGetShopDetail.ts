import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { API_ENDPOINT } from 'src/constants/api';
import { ActionType } from 'src/constants/enums';
import { IShopDetail } from 'src/interfaces/api/response/Shop';
import { useDispatch } from 'src/store/Context';
import { handleError } from 'src/utils/ApiUtil';

interface IUseGetShopDetailProps {
  isShopDetailLoading: boolean;
  fetchShopDetail: (signal?: CancelTokenSource) => Promise<void>;
}

/**
 * 店舗詳細取得カスタムフック
 * @param id 店舗ID
 */
const useGetShopDetail = (id: number): IUseGetShopDetailProps => {
  const { dispatchShop } = useDispatch();
  const [isShopDetailLoading, setIsShopDetailLoading] = useState<boolean>(true);

  /** ページ描画時に取得 */
  useEffect(() => {
    const signal = axios.CancelToken.source();
    fetchShopDetail(signal);
    return () => signal.cancel('Cleanup.');
    // eslint-disable-next-line
  }, []);

  /**
   * 店舗詳細取得
   * @param signal CancelTokenSource
   */
  const fetchShopDetail = useCallback(
    async (signal?: CancelTokenSource): Promise<void> => {
      try {
        const response = await axios.get<IShopDetail>(
          API_ENDPOINT.SHOP.replace('$id', `${id}`),
          {
            cancelToken: signal
              ? signal.token
              : axios.CancelToken.source().token,
          },
        );

        dispatchShop({
          type: ActionType.SET_SHOP_DETAIL,
          payload: response.data,
        });
      } catch (err) {
        handleError(err);
      }

      setIsShopDetailLoading(false);
    },
    [id, dispatchShop],
  );

  return { isShopDetailLoading, fetchShopDetail };
};

export default useGetShopDetail;
