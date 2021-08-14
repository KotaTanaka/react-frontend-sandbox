import { useCallback, useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';

// from app
import { useDispatch } from 'src/Context';
import { API_ENDPOINT } from 'src/constants/api';
import { ActionType } from 'src/constants/enums';
import { IServiceDetail } from 'src/interfaces/api/response/Service';
import { handleError } from 'src/utils/ApiUtil';

interface IUseGetServiceDetailProps {
  isServiceDetailLoading: boolean;
  fetchServiceDetail: (signal?: CancelTokenSource) => Promise<void>;
}

/**
 * Wi-Fiサービス詳細取得カスタムフック
 * @param id サービスID
 */
const useGetServiceDetail = (id: number): IUseGetServiceDetailProps => {
  const { dispatchService } = useDispatch();
  const [isServiceDetailLoading, setIsServiceDetailLoading] =
    useState<boolean>(true);

  /** ページ描画時に取得 */
  useEffect(() => {
    const signal = axios.CancelToken.source();
    fetchServiceDetail(signal);
    return () => signal.cancel('Cleanup.');
    // eslint-disable-next-line
  }, []);

  /**
   * Wi-Fiサービス詳細取得
   * @param signal CancelTokenSource
   */
  const fetchServiceDetail = useCallback(
    async (signal?: CancelTokenSource): Promise<void> => {
      try {
        const response = await axios.get<IServiceDetail>(
          API_ENDPOINT.SERVICE.replace('$id', `${id}`),
          {
            cancelToken: signal
              ? signal.token
              : axios.CancelToken.source().token,
          },
        );

        dispatchService({
          type: ActionType.SET_SERVICE_DETAIL,
          payload: response.data,
        });
      } catch (err) {
        handleError(err);
      }

      setIsServiceDetailLoading(false);
    },
    [id, dispatchService],
  );

  return { isServiceDetailLoading, fetchServiceDetail };
};

export default useGetServiceDetail;
