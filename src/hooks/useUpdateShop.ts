import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { API_ENDPOINT } from 'src/constants/api';
import { IUpdateShopBody } from 'src/interfaces/api/request/Shop';
import { useStore } from 'src/store/Context';
import { handleError } from 'src/utils/ApiUtil';

interface IUseUpdateShopProps {
  updateShopParams: IUpdateShopBody;
  ssidValue: string;
  changeServiceId: (value: number) => void;
  changeShopName: (value: string) => void;
  changeArea: (value: string) => void;
  changeDescription: (value: string) => void;
  changeAddress: (value: string) => void;
  changeAccess: (value: string) => void;
  changeSSID: (value: string) => void;
  changeShopType: (value: string) => void;
  changeOpeningHours: (value: string) => void;
  changeSeatsNum: (value: number) => void;
  changeHasPower: () => void;
  requestUpdateShop: (id: number) => Promise<void>;
  isShowSuccessPopup: boolean;
  closeSuccessPopup: () => void;
}

/** 店舗編集カスタムフック */
const useUpdateShop = (): IUseUpdateShopProps => {
  // prettier-ignore
  const [updateShopParams, setUpdateShopParams] = useState<IUpdateShopBody>({
    serviceId: 0,
    shopName: '',
    area: '',
    description: '',
    address: '',
    access: '',
    ssid: [],
    shopType: '',
    openingHours: '',
    seatsNum: 0,
    hasPower: false,
  });

  const [ssidValue, setSsidValue] = useState<string>('');
  const [isShowSuccessPopup, setIsShowSuccessPopup] = useState<boolean>(false);

  // 現在の値をフォームの初期値に設定する
  const { shopDetail } = useStore('shop');
  useEffect(() => {
    setUpdateShopParams({
      serviceId: shopDetail.shopId,
      shopName: shopDetail.shopName,
      area: shopDetail.area,
      description: shopDetail.description,
      address: shopDetail.address,
      access: shopDetail.access,
      ssid: shopDetail.SSID,
      shopType: shopDetail.shopType,
      openingHours: shopDetail.openingHours,
      seatsNum: shopDetail.seatsNum,
      hasPower: shopDetail.hasPower,
    });
  }, [
    shopDetail.shopId,
    shopDetail.shopName,
    shopDetail.area,
    shopDetail.description,
    shopDetail.address,
    shopDetail.access,
    shopDetail.SSID,
    shopDetail.shopType,
    shopDetail.openingHours,
    shopDetail.seatsNum,
    shopDetail.hasPower,
  ]);

  /** サービスIDを変更する */
  const changeServiceId = useCallback((value: number): void => {
    setUpdateShopParams((currentState) => ({
      ...currentState,
      serviceId: value,
    }));
  }, []);

  /** 店舗名を変更する */
  const changeShopName = useCallback((value: string): void => {
    setUpdateShopParams((currentState) => ({
      ...currentState,
      shopName: value,
    }));
  }, []);

  /** エリアを変更する */
  const changeArea = useCallback((value: string): void => {
    setUpdateShopParams((currentState) => ({
      ...currentState,
      area: value,
    }));
  }, []);

  /** 説明を変更する */
  const changeDescription = useCallback((value: string): void => {
    setUpdateShopParams((currentState) => ({
      ...currentState,
      description: value,
    }));
  }, []);

  /** 住所を変更する */
  const changeAddress = useCallback((value: string): void => {
    setUpdateShopParams((currentState) => ({
      ...currentState,
      address: value,
    }));
  }, []);

  /** アクセスを変更する */
  const changeAccess = useCallback((value: string): void => {
    setUpdateShopParams((currentState) => ({
      ...currentState,
      access: value,
    }));
  }, []);

  /** SSIDを変更する */
  const changeSSID = useCallback((value: string): void => {
    setSsidValue(value);
  }, []);

  /** 店舗種別を変更する */
  const changeShopType = useCallback((value: string): void => {
    setUpdateShopParams((currentState) => ({
      ...currentState,
      shopType: value,
    }));
  }, []);

  /** 営業時間を変更する */
  const changeOpeningHours = useCallback((value: string): void => {
    setUpdateShopParams((currentState) => ({
      ...currentState,
      openingHours: value,
    }));
  }, []);

  /** 座席数を変更する */
  const changeSeatsNum = useCallback((value: number): void => {
    setUpdateShopParams((currentState) => ({
      ...currentState,
      seatsNum: value,
    }));
  }, []);

  /** 電源有無を変更する */
  const changeHasPower = useCallback((): void => {
    setUpdateShopParams((currentState) => ({
      ...currentState,
      hasPower: !currentState.hasPower,
    }));
  }, []);

  /**
   * 店舗登録APIリクエスト
   * @param id 店舗ID
   */
  const requestUpdateShop = useCallback(
    async (id: number): Promise<void> => {
      try {
        await axios.put(API_ENDPOINT.SHOP.replace('$id', `${id}`), {
          ...updateShopParams,
          ssid: ssidValue.split(','),
        } as IUpdateShopBody);

        setSsidValue('');
        setUpdateShopParams({
          serviceId: 0,
          shopName: '',
          area: '',
          description: '',
          address: '',
          access: '',
          ssid: [],
          shopType: '',
          openingHours: '',
          seatsNum: 0,
          hasPower: false,
        });

        setIsShowSuccessPopup(true);
      } catch (err) {
        handleError(err);
      }
    },
    [updateShopParams, ssidValue],
  );

  /** ポップアップを閉じる */
  const closeSuccessPopup = useCallback(() => {
    setIsShowSuccessPopup(false);
  }, []);

  return {
    updateShopParams,
    ssidValue,
    changeServiceId,
    changeShopName,
    changeArea,
    changeDescription,
    changeAddress,
    changeAccess,
    changeSSID,
    changeShopType,
    changeOpeningHours,
    changeSeatsNum,
    changeHasPower,
    requestUpdateShop,
    isShowSuccessPopup,
    closeSuccessPopup,
  };
};

export default useUpdateShop;
