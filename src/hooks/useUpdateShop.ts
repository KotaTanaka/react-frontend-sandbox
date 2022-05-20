import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { API_ENDPOINT } from 'src/constants/api';
import type { IUpdateShopBody } from 'src/interfaces/api/request/Shop';
import { useStore } from 'src/store/Context';
import { handleError } from 'src/utils/ApiUtil';

interface IUseUpdateShopProps {
  values: IUpdateShopBody;
  ssidValue: string;
  changeInputValue: (
    name: keyof IUpdateShopBody,
    value: IUpdateShopBody[keyof IUpdateShopBody],
  ) => void;
  changeSSID: (value: string) => void;
  changeHasPower: () => void;
  requestUpdateShop: (id: number) => Promise<void>;
  isShowSuccessPopup: boolean;
  closeSuccessPopup: () => void;
}

/** 店舗編集カスタムフック */
const useUpdateShop = (): IUseUpdateShopProps => {
  const [values, setValues] = useState<IUpdateShopBody>({
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

  // 現在の値をフォームの初期値に設定する
  const { shopDetail } = useStore('shop');
  useEffect(() => {
    setValues({
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

  const changeInputValue = (
    name: keyof IUpdateShopBody,
    value: IUpdateShopBody[keyof IUpdateShopBody],
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

  /**
   * 店舗登録APIリクエスト
   * @param id 店舗ID
   */
  const requestUpdateShop = useCallback(
    async (id: number) => {
      try {
        await axios.put(API_ENDPOINT.SHOP.replace('$id', `${id}`), {
          ...values,
          ssid: ssidValue.split(','),
        } as IUpdateShopBody);

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
    },
    [values, ssidValue],
  );

  return {
    values,
    ssidValue,
    changeInputValue,
    changeSSID,
    changeHasPower,
    requestUpdateShop,
    isShowSuccessPopup,
    closeSuccessPopup,
  };
};

export default useUpdateShop;
