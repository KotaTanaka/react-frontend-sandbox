import { useCallback, useState } from 'react';
import axios from 'axios';

// from app
import { API_ENDPOINT } from 'src/constants/api';
import { IRegisterAreaBody } from 'src/interfaces/api/request/Area';
import { handleError } from 'src/utils/ApiUtil';

interface IUseRegisterAreaProps {
  registerAreaParams: IRegisterAreaBody;
  changeAreaKey: (value: string) => void;
  changeAreaName: (value: string) => void;
  requestRegisterArea: () => Promise<void>;
  isShowSuccessPopup: boolean;
  closeSuccessPopup: () => void;
}

/** エリア登録カスタムフック */
const useRegisterArea = (): IUseRegisterAreaProps => {
  // prettier-ignore
  const [registerAreaParams, setRegisterAreaParams] = useState<IRegisterAreaBody>({
    areaKey: '',
    areaName: ''
  });

  const [isShowSuccessPopup, setIsShowSuccessPopup] = useState<boolean>(false);

  const changeAreaKey = useCallback((value: string): void => {
    setRegisterAreaParams((currentState) => ({
      ...currentState,
      areaKey: value,
    }));
  }, []);

  const changeAreaName = useCallback((value: string): void => {
    setRegisterAreaParams((currentState) => ({
      ...currentState,
      areaName: value,
    }));
  }, []);

  /** エリア登録APIリクエスト */
  const requestRegisterArea = useCallback(async (): Promise<void> => {
    try {
      await axios.post(API_ENDPOINT.AREAS, registerAreaParams);

      setRegisterAreaParams({
        areaKey: '',
        areaName: '',
      });

      setIsShowSuccessPopup(true);
    } catch (err) {
      handleError(err);
    }
  }, [registerAreaParams]);

  const closeSuccessPopup = useCallback(() => {
    setIsShowSuccessPopup(false);
  }, []);

  return {
    registerAreaParams,
    changeAreaKey,
    changeAreaName,
    requestRegisterArea,
    isShowSuccessPopup,
    closeSuccessPopup,
  };
};

export default useRegisterArea;
