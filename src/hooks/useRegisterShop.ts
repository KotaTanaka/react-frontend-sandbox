import axios from 'axios';
import { useCallback, useState } from 'react';
import { API_ENDPOINT } from 'src/constants/api';
import type { IRegisterShopBody } from 'src/interfaces/api/request/Shop';
import { handleError } from 'src/utils/ApiUtil';

interface IUseRegisterShopProps {
  values: IRegisterShopBody;
  ssidValue: string;
  changeInputValue: (
    name: keyof IRegisterShopBody,
    value: IRegisterShopBody[keyof IRegisterShopBody],
  ) => void;
  changeSSID: (value: string) => void;
  changeHasPower: () => void;
  requestRegisterShop: () => Promise<void>;
  isShowSuccessPopup: boolean;
  closeSuccessPopup: () => void;
}

/** 店舗登録カスタムフック */
const useRegisterShop = (): IUseRegisterShopProps => {
  const [values, setValues] = useState<IRegisterShopBody>({
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
  const closeSuccessPopup = () => setIsShowSuccessPopup(false);

  const changeInputValue = (
    name: keyof IRegisterShopBody,
    value: IRegisterShopBody[keyof IRegisterShopBody],
  ) => {
    setValues((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  /** SSIDを変更する */
  const changeSSID = (value: string) => setSsidValue(value);

  /** 電源有無を変更する */
  const changeHasPower = () =>
    setValues((currentState) => ({
      ...currentState,
      hasPower: !currentState.hasPower,
    }));

  /** 店舗登録APIリクエスト */
  const requestRegisterShop = useCallback(async () => {
    try {
      await axios.post(API_ENDPOINT.SHOPS, {
        ...values,
        ssid: ssidValue.split(','),
      } as IRegisterShopBody);

      setSsidValue('');
      setValues({
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
  }, [values, ssidValue]);

  return {
    values,
    ssidValue,
    changeInputValue,
    changeSSID,
    changeHasPower,
    requestRegisterShop,
    isShowSuccessPopup,
    closeSuccessPopup,
  };
};

export default useRegisterShop;
