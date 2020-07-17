/** レビュー情報 */
export interface IReview {
  reviewId: number;
  comment: string;
  evaluation: number;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

/** レビューリスト */
export interface IReviewList {
  reviewList: IReviewListElement[];
  total: number;
}
/** レビューリスト要素 */
export interface IReviewListElement extends IReview {
  shopId: string;
  shopName: string;
  serviceId: string;
  wifiName: string;
}
