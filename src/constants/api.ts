const HOST = process.env.REACT_APP_API_HOST;

/** 管理APIエンドポイント */
export const API_ENDPOINT = {
  // Wi-Fiサービス一覧取得
  // Wi-Fiサービス登録
  SERVICES: `${HOST}/admin/services`,
  // 店舗一覧取得
  // 店舗登録
  SHOPS: `${HOST}/admin/shops`,
};

/** クライアントAPIエンドポイント */
export const CLIENT_API_ENDPOINT = {
  // エリアマスタ取得
  AREA_MASTER: `${HOST}/areas`,
};
