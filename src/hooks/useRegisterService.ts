import { useCallback, useState } from 'react';
import axios from 'axios';

// from app
import { API_ENDPOINT } from 'src/constants/api';
import { IRegisterServiceBody } from 'src/interfaces/api/request/Service';
import { handleError } from 'src/utils/ApiUtil';

interface IUseRegisterServiceProps {
  registerServiceParams: IRegisterServiceBody;
  changeWifiName: (value: string) => void;
  changeLink: (value: string) => void;
  requestRegisterService: () => Promise<void>;
  isShowSuccessPopup: boolean;
  closeSuccessPopup: () => void;
}

/** Wi-Fiサービス登録カスタムフック */
const useRegisterService = (): IUseRegisterServiceProps => {
  // prettier-ignore
  const [registerServiceParams, setRegisterServiceParams] = useState<IRegisterServiceBody>({
    wifiName: '',
    link: ''
  });

  const [isShowSuccessPopup, setIsShowSuccessPopup] = useState<boolean>(false);

  const changeWifiName = useCallback((value: string): void => {
    setRegisterServiceParams((currentState) => ({
      ...currentState,
      wifiName: value,
    }));
  }, []);

  const changeLink = useCallback((value: string): void => {
    setRegisterServiceParams((currentState) => ({
      ...currentState,
      link: value,
    }));
  }, []);

  /** Wi-Fiサービス登録APIリクエスト */
  const requestRegisterService = useCallback(async (): Promise<void> => {
    try {
      await axios.post(API_ENDPOINT.SERVICES, registerServiceParams);

      setRegisterServiceParams({
        wifiName: '',
        link: '',
      });

      setIsShowSuccessPopup(true);
    } catch (err) {
      handleError(err);
    }
  }, [registerServiceParams]);

  const closeSuccessPopup = useCallback(() => {
    setIsShowSuccessPopup(false);
  }, []);

  return {
    registerServiceParams,
    changeWifiName,
    changeLink,
    requestRegisterService,
    isShowSuccessPopup,
    closeSuccessPopup,
  };
};

export default useRegisterService;
