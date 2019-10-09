import { useState, useEffect } from "react";
import axios, { CancelTokenSource } from "axios";

// from app
import { API_ENDPOINT } from "constants/Api"
import { IServiceList } from "interfaces/api/Service";

/**
 * Wi-Fiサービス一覧取得カスタムフック
 * @author kotatanaka
 */
const useGetServices = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [services, setServices] = useState<IServiceList>({
    serviceList: [],
    total: 0
  });

  useEffect(() => {
    const signal = axios.CancelToken.source();
    setIsLoading(true);
    getServiceList(signal);
    return () => {
      signal.cancel("Cleanup.");
    };
  }, []);

  /** Wi-Fiサービス一覧取得 */
  const getServiceList = (signal: CancelTokenSource) => {

    axios
      .get(API_ENDPOINT.SERVICES, { cancelToken: signal.token })
      .then((response: { data: IServiceList }) => {
        setServices(Object.assign(response.data));
        setIsLoading(false);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log("Request Cancelled: " + error.message);
        } else {
          // TODO エラーハンドリング
        }
        setIsLoading(false);
      });
  };

  return { services, isLoading };
};

export default useGetServices
