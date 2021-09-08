import axios from 'axios';
import { useCallback, useState } from 'react';
import { API_ENDPOINT } from 'src/constants/api';
import { handleError } from 'src/utils/ApiUtil';

interface IUseDeleteAreaProps {
  requestDeleteArea: (key: string) => Promise<void>;
  isShowSuccessDeletedPopup: boolean;
  closeSuccessDeletedPopup: () => void;
}

/** エリア削除カスタムフック */
const useDeleteArea = (): IUseDeleteAreaProps => {
  // prettier-ignore
  const [isShowSuccessDeletedPopup, setIsShowSuccessDeletedPopup] = useState<boolean>(false);

  /**
   * エリア削除APIリクエスト
   * @param id サービスID
   */
  const requestDeleteArea = useCallback(async (key: string): Promise<void> => {
    try {
      await axios.delete(API_ENDPOINT.AREA.replace('$key', `${key}`));

      setIsShowSuccessDeletedPopup(true);
    } catch (err) {
      handleError(err);
    }
  }, []);

  /** ポップアップを閉じる */
  const closeSuccessDeletedPopup = useCallback(() => {
    setIsShowSuccessDeletedPopup(false);
  }, []);

  return {
    requestDeleteArea,
    isShowSuccessDeletedPopup,
    closeSuccessDeletedPopup,
  };
};

export default useDeleteArea;
