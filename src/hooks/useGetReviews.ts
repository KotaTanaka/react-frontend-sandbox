import { useCallback, useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';

// from app
import { useDispatch } from 'src/Context';
import { API_ENDPOINT } from 'src/constants/api';
import { ActionType } from 'src/constants/enums';
import { IReviewList } from 'src/interfaces/api/response/Review';
import { handleError } from 'src/utils/ApiUtil';

interface IUseGetReviewsProps {
  isReviewsLoading: boolean;
  fetchReviewList: (signal?: CancelTokenSource) => Promise<void>;
}

/** レビュー一覧取得カスタムフック */
const useGetReviews = (): IUseGetReviewsProps => {
  const { dispatchReview } = useDispatch();
  const [isReviewsLoading, setIsReviewsLoading] = useState<boolean>(true);

  /** ページ描画時に取得 */
  useEffect(() => {
    const signal = axios.CancelToken.source();
    fetchReviewList(signal);
    return () => signal.cancel('Cleanup.');
    // eslint-disable-next-line
  }, []);

  /**
   * レビュー一覧取得
   * @param signal CancelTokenSource
   */
  // prettier-ignore
  const fetchReviewList = useCallback(async (signal?: CancelTokenSource): Promise<void> => {
    try {
      const response = await axios.get<IReviewList>(API_ENDPOINT.REVIEWS, {
        cancelToken: signal ? signal.token : axios.CancelToken.source().token,
      });

      dispatchReview({
        type: ActionType.SET_REVIEW_LIST,
        payload: response.data,
      });
    } catch (err) {
      handleError(err);
    }

    setIsReviewsLoading(false);
  }, [dispatchReview]);

  return { isReviewsLoading, fetchReviewList };
};

export default useGetReviews;
