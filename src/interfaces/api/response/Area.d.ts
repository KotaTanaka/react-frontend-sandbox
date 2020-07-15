import { SpawnSyncOptionsWithStringEncoding } from 'child_process';

/** エリアマスタ取得レスポンス */
export interface IAreaMaster {
  areaList: IArea[];
}

/** エリアマスタ取得レスポンス要素 */
export interface IArea {
  areaKey: string;
  areaName: string;
  shopCount: number;
}
