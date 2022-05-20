import axios from 'axios';
import { useCallback, useState } from 'react';
import { API_ENDPOINT } from 'src/constants/api';
import type { IRegisterAreaBody } from 'src/interfaces/api/request/Area';
import { handleError } from 'src/utils/ApiUtil';

interface IUseRegisterAreaProps {
  values: IRegisterAreaBody;
  changeValue: (
    name: keyof IRegisterAreaBody,
    value: IRegisterAreaBody[keyof IRegisterAreaBody],
  ) => void;
  requestRegisterArea: () => Promise<void>;
  isShowSuccessPopup: boolean;
  closeSuccessPopup: () => void;
}

/** エリア登録カスタムフック */
const useRegisterArea = (): IUseRegisterAreaProps => {
  const [values, setValues] = useState<IRegisterAreaBody>({
    areaKey: '',
    areaName: '',
  });

  const [isShowSuccessPopup, setIsShowSuccessPopup] = useState<boolean>(false);
  const closeSuccessPopup = () => setIsShowSuccessPopup(false);

  const changeValue = (
    name: keyof IRegisterAreaBody,
    value: IRegisterAreaBody[keyof IRegisterAreaBody],
  ) => {
    setValues((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  /** エリア登録APIリクエスト */
  const requestRegisterArea = useCallback(async () => {
    try {
      await axios.post(API_ENDPOINT.AREAS, values);

      setValues({
        areaKey: '',
        areaName: '',
      });

      setIsShowSuccessPopup(true);
    } catch (err) {
      handleError(err);
    }
  }, [values]);

  return {
    values,
    changeValue,
    requestRegisterArea,
    isShowSuccessPopup,
    closeSuccessPopup,
  };
};

export default useRegisterArea;
