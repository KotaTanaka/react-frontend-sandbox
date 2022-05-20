import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { API_ENDPOINT } from 'src/constants/api';
import type { IUpdateServiceBody } from 'src/interfaces/api/request/Service';
import { useStore } from 'src/store/Context';
import { handleError } from 'src/utils/ApiUtil';

interface IUseUpdateServiceProps {
  values: IUpdateServiceBody;
  changeValue: (
    name: keyof IUpdateServiceBody,
    value: IUpdateServiceBody[keyof IUpdateServiceBody],
  ) => void;
  requestUpdateService: (id: number) => Promise<void>;
  isShowSuccessPopup: boolean;
  closeSuccessPopup: () => void;
}

/** Wi-Fiサービス編集カスタムフック */
const useUpdateService = (): IUseUpdateServiceProps => {
  const [values, setValues] = useState<IUpdateServiceBody>({
    wifiName: '',
    link: '',
  });

  const [isShowSuccessPopup, setIsShowSuccessPopup] = useState<boolean>(false);
  const closeSuccessPopup = () => setIsShowSuccessPopup(false);

  // 現在の値をフォームの初期値に設定する
  const { serviceDetail } = useStore('service');
  useEffect(() => {
    setValues({
      wifiName: serviceDetail.wifiName,
      link: serviceDetail.link,
    });
  }, [serviceDetail.wifiName, serviceDetail.link]);

  const changeValue = (
    name: keyof IUpdateServiceBody,
    value: IUpdateServiceBody[keyof IUpdateServiceBody],
  ) => {
    setValues((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  /**
   * Wi-Fiサービス編集APIリクエスト
   * @param id サービスID
   */
  const requestUpdateService = useCallback(
    async (id: number) => {
      try {
        await axios.put(API_ENDPOINT.SERVICE.replace('$id', `${id}`), values);

        setValues({
          wifiName: '',
          link: '',
        });

        setIsShowSuccessPopup(true);
      } catch (err) {
        handleError(err);
      }
    },
    [values],
  );

  return {
    values,
    changeValue,
    requestUpdateService,
    isShowSuccessPopup,
    closeSuccessPopup,
  };
};

export default useUpdateService;
