/** APIエラーレスポンス */
export interface IApiError {
  code: number;
  message: string;
  detailMessage: string[];
}
