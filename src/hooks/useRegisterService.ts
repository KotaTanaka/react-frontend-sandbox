import axios from 'axios';
import { useCallback, useState } from 'react';
import { API_ENDPOINT } from 'src/constants/api';
import type { IRegisterServiceBody } from 'src/interfaces/api/request/Service';
import { handleError } from 'src/utils/ApiUtil';

interface IUseRegisterServiceProps {
  values: IRegisterServiceBody;
  changeValue: (
    name: keyof IRegisterServiceBody,
    value: IRegisterServiceBody[keyof IRegisterServiceBody],
  ) => void;
  requestRegisterService: () => Promise<void>;
  isShowSuccessPopup: boolean;
  closeSuccessPopup: () => void;
}

/** Wi-Fiサービス登録カスタムフック */
const useRegisterService = (): IUseRegisterServiceProps => {
  const [values, setValues] = useState<IRegisterServiceBody>({
    wifiName: '',
    link: '',
  });

  const [isShowSuccessPopup, setIsShowSuccessPopup] = useState<boolean>(false);
  const closeSuccessPopup = () => setIsShowSuccessPopup(false);

  const changeValue = (
    name: keyof IRegisterServiceBody,
    value: IRegisterServiceBody[keyof IRegisterServiceBody],
  ) => {
    setValues((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  /** Wi-Fiサービス登録APIリクエスト */
  const requestRegisterService = useCallback(async () => {
    try {
      await axios.post(API_ENDPOINT.SERVICES, values);

      setValues({
        wifiName: '',
        link: '',
      });

      setIsShowSuccessPopup(true);
    } catch (err) {
      handleError(err);
    }
  }, [values]);

  return {
    values,
    changeValue,
    requestRegisterService,
    isShowSuccessPopup,
    closeSuccessPopup,
  };
};

export default useRegisterService;
