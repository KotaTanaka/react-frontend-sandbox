import { useCallback, useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';

// from app
import { CLIENT_API_ENDPOINT } from 'src/constants/api';
import { IAreaMaster } from 'src/interfaces/api/response/Area';
import { handleError } from 'src/utils/ApiUtil';

interface IUseGetAreaMasterProps {
  areaMaster: IAreaMaster;
  isAreaMasterLoading: boolean;
  fetchAreaMaster: (signal?: CancelTokenSource) => Promise<void>;
}

/** エリアマスタ取得カスタムフック */
const useGetAreaMaster = (): IUseGetAreaMasterProps => {
  const [isAreaMasterLoading, setIsAreaMasterLoading] = useState<boolean>(true);
  // prettier-ignore
  const [areaMaster, setAreaMaster] = useState<IAreaMaster>({ areaList: [] });

  /** ページ描画時に取得 */
  useEffect(() => {
    const signal = axios.CancelToken.source();
    fetchAreaMaster(signal);
    return () => signal.cancel('Cleanup.');
    // eslint-disable-next-line
  }, []);

  /**
   * エリアマスタ取得
   * @param signal CancelTokenSource
   */
  const fetchAreaMaster = useCallback(
    async (signal?: CancelTokenSource): Promise<void> => {
      try {
        const response = await axios.get(CLIENT_API_ENDPOINT.AREA_MASTER, {
          cancelToken: signal ? signal.token : axios.CancelToken.source().token,
        });

        setAreaMaster(response.data);
      } catch (err) {
        handleError(err);
      }

      setIsAreaMasterLoading(false);
    },
    [],
  );

  return { areaMaster, isAreaMasterLoading, fetchAreaMaster };
};

export default useGetAreaMaster;
