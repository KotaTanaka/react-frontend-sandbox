// from app
import { ActionType } from 'src/constants/enums';
import { IReviewListElement } from 'src/interfaces/api/response/Review';

/** Action */
export interface IReviewAction {
  type: ActionType.SET_REVIEW_LIST;
  payload: any;
}

/** State */
export interface IReviewState {
  reviewList: IReviewListElement[];
  total: number;
}

/** Initial State */
export const reviewInitialState: IReviewState = {
  reviewList: [],
  total: 0,
};

/** レビュー関連 Reducer */
const ReviewReducer = (state: IReviewState, action: IReviewAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_REVIEW_LIST:
      return {
        ...state,
        reviewList: payload.reviewList,
        total: payload.total,
      };
    default:
      return state;
  }
};

export default ReviewReducer;
