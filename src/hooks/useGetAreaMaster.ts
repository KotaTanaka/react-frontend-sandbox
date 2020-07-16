import { useCallback, useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';

// from app
import { useDispatch } from 'src/Context';
import { CLIENT_API_ENDPOINT } from 'src/constants/api';
import { ActionType } from 'src/constants/enums';
import { IAreaMaster } from 'src/interfaces/api/response/Area';
import { handleError } from 'src/utils/ApiUtil';

interface IUseGetAreaMasterProps {
  isAreaMasterLoading: boolean;
  fetchAreaMaster: (signal?: CancelTokenSource) => Promise<void>;
}

/** エリアマスタ取得カスタムフック */
const useGetAreaMaster = (): IUseGetAreaMasterProps => {
  const { dispatchArea } = useDispatch();
  const [isAreaMasterLoading, setIsAreaMasterLoading] = useState<boolean>(true);

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
        const response = await axios.get<IAreaMaster>(
          CLIENT_API_ENDPOINT.AREA_MASTER,
          {
            cancelToken: signal
              ? signal.token
              : axios.CancelToken.source().token,
          },
        );

        dispatchArea({
          type: ActionType.SET_AREA_LIST,
          payload: response.data,
        });
      } catch (err) {
        handleError(err);
      }

      setIsAreaMasterLoading(false);
    },
    [dispatchArea],
  );

  return { isAreaMasterLoading, fetchAreaMaster };
};

export default useGetAreaMaster;
