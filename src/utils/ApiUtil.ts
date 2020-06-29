import axios from 'axios';

/** APIエラーハンドリング */
export const handleError = (err: any) => {
  if (axios.isCancel(err)) {
    console.error('Request Cancelled: ' + err.message);
  } else {
    // TODO エラーハンドリング
    console.error(err);
  }
};
