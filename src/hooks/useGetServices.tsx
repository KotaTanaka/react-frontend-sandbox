import { useState, useEffect } from 'react';
import axios, { CancelTokenSource } from 'axios';

// from app
import { API_ENDPOINT } from 'constants/Api';
import { IServiceList } from 'interfaces/api/Service';

/**
 * Wi-Fiサービス一覧取得カスタムフック
 * @author kotatanaka
 */
const useGetServices = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [services, setServices] = useState<IServiceList>({
    serviceList: [],
    total: 0
  });

  useEffect(() => {
    const signal = axios.CancelToken.source();
    fetchServiceList(signal);
    return () => {
      signal.cancel('Cleanup.');
    };
  }, []);

  /** Wi-Fiサービス一覧取得 */
  const fetchServiceList = async (
    signal?: CancelTokenSource
  ): Promise<void> => {
    try {
      const { data } = await axios.get(API_ENDPOINT.SERVICES, {
        cancelToken: signal ? signal.token : axios.CancelToken.source().token
      });
      setServices(Object.assign(data));
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Request Cancelled: ' + err.message);
      } else {
        // TODO エラーハンドリング
        console.log(err);
      }
    }

    setIsLoading(false);
  };

  return { services, isLoading, fetchServiceList };
};

export default useGetServices;
