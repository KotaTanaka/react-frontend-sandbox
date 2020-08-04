import { useCallback, useState } from 'react';
import axios from 'axios';

// from app
import { API_ENDPOINT } from 'src/constants/api';
import { handleError } from 'src/utils/ApiUtil';

interface IUseDeleteShopProps {
  requestDeleteShop: (id: number) => Promise<void>;
  isShowSuccessDeletedPopup: boolean;
  closeSuccessDeletedPopup: () => void;
}

/** 店舗削除カスタムフック */
const useDeleteShop = (): IUseDeleteShopProps => {
  // prettier-ignore
  const [isShowSuccessDeletedPopup, setIsShowSuccessDeletedPopup] = useState<boolean>(false);

  /**
   * 店舗削除APIリクエスト
   * @param id サービスID
   */
  const requestDeleteShop = useCallback(async (id: number): Promise<void> => {
    try {
      await axios.delete(API_ENDPOINT.SHOP.replace('$id', `${id}`));

      setIsShowSuccessDeletedPopup(true);
    } catch (err) {
      handleError(err);
    }
  }, []);

  const closeSuccessDeletedPopup = useCallback(() => {
    setIsShowSuccessDeletedPopup(false);
  }, []);

  return {
    requestDeleteShop,
    isShowSuccessDeletedPopup,
    closeSuccessDeletedPopup,
  };
};

export default useDeleteShop;
