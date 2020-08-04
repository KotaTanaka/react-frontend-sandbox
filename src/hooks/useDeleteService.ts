import { useCallback, useState } from 'react';
import axios from 'axios';

// from app
import { API_ENDPOINT } from 'src/constants/api';
import { handleError } from 'src/utils/ApiUtil';

interface IUseDeleteServiceProps {
  requestDeleteService: (id: number) => Promise<void>;
  isShowSuccessDeletedPopup: boolean;
  closeSuccessDeletedPopup: () => void;
}

/** Wi-Fiサービス削除カスタムフック */
const useDeleteService = (): IUseDeleteServiceProps => {
  // prettier-ignore
  const [isShowSuccessDeletedPopup, setIsShowSuccessDeletedPopup] = useState<boolean>(false);

  /**
   * Wi-Fiサービス削除APIリクエスト
   * @param id サービスID
   */
  // prettier-ignore
  const requestDeleteService = useCallback(async (id: number): Promise<void> => {
    try {
      await axios.delete(API_ENDPOINT.SERVICE.replace('$id', `${id}`));

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
    requestDeleteService,
    isShowSuccessDeletedPopup,
    closeSuccessDeletedPopup,
  };
};

export default useDeleteService;
