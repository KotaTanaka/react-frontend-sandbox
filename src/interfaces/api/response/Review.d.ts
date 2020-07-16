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
