import { useCallback, useState } from 'react';
import axios from 'axios';

// from app
import { API_ENDPOINT } from 'src/constants/api';
import { IRegisterShopBody } from 'src/interfaces/api/request/Shop';

interface IUseRegisterShopProps {
  registerShopParams: IRegisterShopBody;
  changeServiceId: (value: number) => void;
  changeArea: (value: string) => void;
  changeSSID: (value: string) => void;
  changeShopName: (value: string) => void;
  changeDescription: (value: string) => void;
  changeAddress: (value: string) => void;
  changeShopType: (value: string) => void;
  changeOpeningHours: (value: string) => void;
  changeSeatsNum: (value: number) => void;
  changeHasPower: (value: boolean) => void;
  requestRegisterShop: () => Promise<void>;
  isShowSuccessPopup: boolean;
  closeSuccessPopup: () => void;
}

/** 店舗登録カスタムフック */
const useRegisterShop = (): IUseRegisterShopProps => {
  // prettier-ignore
  const [registerShopParams, setRegisterShopParams] = useState<IRegisterShopBody>({
    serviceId: 0,
    area: '',
    ssid: '',
    shopName: '',
    description: '',
    address: '',
    shopType: '',
    openingHours: '',
    seatsNum: 0,
    hasPower: false,
  });

  const [isShowSuccessPopup, setIsShowSuccessPopup] = useState<boolean>(false);

  const changeServiceId = useCallback((value: number): void => {
    console.log(value);
    setRegisterShopParams((currentState) => ({
      ...currentState,
      serviceId: value,
    }));
  }, []);

  const changeArea = useCallback((value: string): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      area: value,
    }));
  }, []);

  const changeSSID = useCallback((value: string): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      ssid: value,
    }));
  }, []);

  const changeShopName = useCallback((value: string): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      shopName: value,
    }));
  }, []);

  const changeDescription = useCallback((value: string): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      description: value,
    }));
  }, []);

  const changeAddress = useCallback((value: string): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      address: value,
    }));
  }, []);

  const changeShopType = useCallback((value: string): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      shopType: value,
    }));
  }, []);

  const changeOpeningHours = useCallback((value: string): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      openingHours: value,
    }));
  }, []);

  const changeSeatsNum = useCallback((value: number): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      seatsNum: value,
    }));
  }, []);

  const changeHasPower = useCallback((value: boolean): void => {
    setRegisterShopParams((currentState) => ({
      ...currentState,
      hasPower: value,
    }));
  }, []);

  /** 店舗登録APIリクエスト */
  const requestRegisterShop = useCallback(async (): Promise<void> => {
    try {
      await axios.post(API_ENDPOINT.SHOPS, registerShopParams);

      setRegisterShopParams({
        serviceId: 0,
        area: '',
        ssid: '',
        shopName: '',
        description: '',
        address: '',
        shopType: '',
        openingHours: '',
        seatsNum: 0,
        hasPower: false,
      });

      setIsShowSuccessPopup(true);
    } catch (err) {
      console.error(err);
    }
  }, [registerShopParams]);

  const closeSuccessPopup = useCallback(() => {
    setIsShowSuccessPopup(false);
  }, []);

  return {
    registerShopParams,
    changeServiceId,
    changeArea,
    changeSSID,
    changeShopName,
    changeDescription,
    changeAddress,
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
