import { useCallback, useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';

// from app
import { API_ENDPOINT } from 'src/constants/api';
import { IServiceList } from 'src/interfaces/api/response/Service';
import { handleError } from 'src/utils/ApiUtil';

interface IUseGetServicesProps {
  services: IServiceList;
  isServicesLoading: boolean;
  fetchServiceList: (signal?: CancelTokenSource) => Promise<void>;
}

/** Wi-Fiサービス一覧取得カスタムフック */
const useGetServices = (): IUseGetServicesProps => {
  const [isServicesLoading, setIsServicesLoading] = useState<boolean>(true);
  // prettier-ignore
  const [services, setServices] = useState<IServiceList>({ serviceList: [], total: 0 });

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
        const response = await axios.get(API_ENDPOINT.SERVICES, {
          cancelToken: signal ? signal.token : axios.CancelToken.source().token,
        });

        setServices(response.data);
      } catch (err) {
        handleError(err);
      }

      setIsServicesLoading(false);
    },
    [],
  );

  return { services, isServicesLoading, fetchServiceList };
};

export default useGetServices;
