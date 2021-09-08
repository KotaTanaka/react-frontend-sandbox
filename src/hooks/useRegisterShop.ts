import axios from 'axios';
import { useCallback, useState } from 'react';
import { API_ENDPOINT } from 'src/constants/api';
import { IRegisterShopBody } from 'src/interfaces/api/request/Shop';
import { handleError } from 'src/utils/ApiUtil';

interface IUseRegisterShopProps {
  registerShopParams: IRegisterShopBody;
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
  requestRegisterShop: () => Promise<void>;
  isShowSuccessPopup: boolean;
  closeSuccessPopup: () => void;
}

/** 店舗登録カスタムフック */
const useRegisterShop = (): IUseRegisterShopProps => {
  // prettier-ignore
  const [registerShopParams, setRegisterShopParams] = useState<IRegisterShopBody>({
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

  /** サービスIDを変更する */
  const changeServiceId = useCallback((value: number): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      serviceId: value,
    }));
  }, []);

  /** 店舗名を変更する */
  const changeShopName = useCallback((value: string): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      shopName: value,
    }));
  }, []);

  /** エリアを変更する  */
  const changeArea = useCallback((value: string): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      area: value,
    }));
  }, []);

  /** 説明を変更する */
  const changeDescription = useCallback((value: string): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      description: value,
    }));
  }, []);

  /** 住所を変更する */
  const changeAddress = useCallback((value: string): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      address: value,
    }));
  }, []);

  /** アクセスを変更する */
  const changeAccess = useCallback((value: string): void => {
    setRegisterShopParams((currentState) => ({
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
    setRegisterShopParams((currentState) => ({
      ...currentState,
      shopType: value,
    }));
  }, []);

  /** 営業時間を変更する */
  const changeOpeningHours = useCallback((value: string): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      openingHours: value,
    }));
  }, []);

  /** 座席数を変更する */
  const changeSeatsNum = useCallback((value: number): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      seatsNum: value,
    }));
  }, []);

  /** 電源有無を変更する */
  const changeHasPower = useCallback((): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      hasPower: !currentState.hasPower,
    }));
  }, []);

  /** 店舗登録APIリクエスト */
  const requestRegisterShop = useCallback(async (): Promise<void> => {
    try {
      await axios.post(API_ENDPOINT.SHOPS, {
        ...registerShopParams,
        ssid: ssidValue.split(','),
      } as IRegisterShopBody);

      setSsidValue('');
      setRegisterShopParams({
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
  }, [registerShopParams, ssidValue]);

  /** ポップアップを閉じる */
  const closeSuccessPopup = useCallback(() => {
    setIsShowSuccessPopup(false);
  }, []);

  return {
    registerShopParams,
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
    requestRegisterShop,
    isShowSuccessPopup,
    closeSuccessPopup,
  };
};

export default useRegisterShop;
