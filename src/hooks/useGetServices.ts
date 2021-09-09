import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { API_ENDPOINT } from 'src/constants/api';
import { ActionType } from 'src/constants/enums';
import { IServiceList } from 'src/interfaces/api/response/Service';
import { useDispatch } from 'src/store/Context';
import { handleError } from 'src/utils/ApiUtil';

interface IUseGetServicesProps {
  isServicesLoading: boolean;
  fetchServiceList: (signal?: CancelTokenSource) => Promise<void>;
}

/** Wi-Fiサービス一覧取得カスタムフック */
const useGetServices = (): IUseGetServicesProps => {
  const { dispatchService } = useDispatch();
  const [isServicesLoading, setIsServicesLoading] = useState<boolean>(true);

  /** ページ描画時に取得 */
  useEffect(() => {
    const signal = axios.CancelToken.source();
    fetchServiceList(signal);
    return () => signal.cancel('Cleanup.');
    // eslint-disable-next-line
  }, []);

  /**
   * Wi-Fiサービス一覧取得
   * @param signal CancelTokenSource
   */
  const fetchServiceList = useCallback(
    async (signal?: CancelTokenSource): Promise<void> => {
      try {
        const response = await axios.get<IServiceList>(API_ENDPOINT.SERVICES, {
          cancelToken: signal ? signal.token : axios.CancelToken.source().token,
        });

        dispatchService({
          type: ActionType.SET_SERVICE_LIST,
          payload: response.data,
        });
      } catch (err) {
        handleError(err);
      }

      setIsServicesLoading(false);
    },
    [dispatchService],
  );

  return { isServicesLoading, fetchServiceList };
};

export default useGetServices;
