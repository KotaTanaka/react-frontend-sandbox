import { useCallback, useState } from 'react';
import axios from 'axios';

// from app
import { API_ENDPOINT } from 'src/constants/api';
import { handleError } from 'src/utils/ApiUtil';

interface IUseDeleteReviewProps {
  requestDeleteReview: (id: number) => Promise<void>;
  isShowSuccessDeletedPopup: boolean;
  closeSuccessDeletedPopup: () => void;
}

/** レビュー削除カスタムフック */
const useDeleteReview = (): IUseDeleteReviewProps => {
  // prettier-ignore
  const [isShowSuccessDeletedPopup, setIsShowSuccessDeletedPopup] = useState<boolean>(false);

  /**
   * レビュー削除APIリクエスト
   * @param id サービスID
   */
  const requestDeleteReview = useCallback(async (id: number): Promise<void> => {
    try {
      await axios.delete(API_ENDPOINT.REVIEW.replace('$id', `${id}`));

      setIsShowSuccessDeletedPopup(true);
    } catch (err) {
      handleError(err);
    }
  }, []);

  const closeSuccessDeletedPopup = useCallback(() => {
    setIsShowSuccessDeletedPopup(false);
  }, []);

  return {
    requestDeleteReview,
    isShowSuccessDeletedPopup,
    closeSuccessDeletedPopup,
  };
};

export default useDeleteReview;
