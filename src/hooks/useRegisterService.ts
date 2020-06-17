import { useCallback, useState } from 'react';
import axios from 'axios';

// from app
import { API_ENDPOINT } from 'src/constants/api';
import { IRegisterServiceBody } from 'src/interfaces/api/request/Service';

interface IUseRegisterServiceProps {
  registerServiceParams: IRegisterServiceBody;
  changeWifiName: (value: string) => void;
  changeLink: (value: string) => void;
  requestRegisterService: () => Promise<void>;
}

/** Wi-Fiサービス登録カスタムフック */
const useRegisterService = (): IUseRegisterServiceProps => {
  // prettier-ignore
  const [registerServiceParams, setRegisterServiceParams] = useState<IRegisterServiceBody>({
    wifiName: '',
    link: ''
  });

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
    } catch (err) {
      console.error(err);
    }
  }, [registerServiceParams]);

  return {
    registerServiceParams,
    changeWifiName,
    changeLink,
    requestRegisterService,
  };
};

export default useRegisterService;
