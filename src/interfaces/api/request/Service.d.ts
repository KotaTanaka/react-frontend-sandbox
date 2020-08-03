/** Wi-Fiサービス登録リクエストボディ */
export interface IRegisterServiceBody {
  wifiName: string;
  link: string;
}

/** Wi-Fiサービス編集リクエストボディ */
export type IUpdateServiceBody = Partial<IRegisterServiceBody>;
