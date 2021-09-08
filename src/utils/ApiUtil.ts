import axios from 'axios';
import { IApiError } from 'src/interfaces/api/response/Error';

/**
 * APIエラーハンドリング
 * @param err エラー
 * @return {IApiError | undefined} APIエラーであればAPIエラー
 */
export const handleError = (err: any): IApiError | undefined => {
  if (axios.isCancel(err)) {
    console.warn('Request Cancelled.', err.message);
    return;
  }

  if (!err.response) {
    console.error('Network Error.');
    return;
  }

  const errorData = err.response.data as IApiError;

  switch (err.response.status) {
    case 400:
      console.error('[400] Request Error.', errorData);
      break;
    case 404:
      console.error('[404] No Handler Found.');
      break;
    case 500:
      console.error('[500] Server Error.', errorData);
      break;
    default:
      console.error(errorData);
  }

  return errorData;
};
