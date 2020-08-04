import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';

// from app
import { useGlobalState } from 'src/Context';
import { API_ENDPOINT } from 'src/constants/api';
import { IUpdateServiceBody } from 'src/interfaces/api/request/Service';
import { handleError } from 'src/utils/ApiUtil';

interface IUseUpdateServiceProps {
  updateServiceParams: IUpdateServiceBody;
  changeWifiName: (value: string) => void;
  changeLink: (value: string) => void;
  requestUpdateService: (id: number) => Promise<void>;
  isShowSuccessPopup: boolean;
  closeSuccessPopup: () => void;
}

/** Wi-Fiサービス編集カスタムフック */
const useUpdateService = (): IUseUpdateServiceProps => {
  // prettier-ignore
  const [updateServiceParams, setUpdateServiceParams] = useState<IUpdateServiceBody>({
    wifiName: '',
    link: ''
  });

  const [isShowSuccessPopup, setIsShowSuccessPopup] = useState<boolean>(false);

  // 現在の値をフォームの初期値に設定する
  const { serviceDetail } = useGlobalState('service');
  useEffect(() => {
    setUpdateServiceParams({
      wifiName: serviceDetail.wifiName,
      link: serviceDetail.link,
    });
  }, [serviceDetail.wifiName, serviceDetail.link]);

  /** サービス名を変更する */
  const changeWifiName = useCallback((value: string): void => {
    setUpdateServiceParams((currentState) => ({
      ...currentState,
      wifiName: value,
    }));
  }, []);

  /** リンクを変更する */
  const changeLink = useCallback((value: string): void => {
    setUpdateServiceParams((currentState) => ({
      ...currentState,
      link: value,
    }));
  }, []);

  /**
   * Wi-Fiサービス編集APIリクエスト
   * @param id サービスID
   */
  const requestUpdateService = useCallback(
    async (id: number): Promise<void> => {
      try {
        await axios.put(
          API_ENDPOINT.SERVICE.replace('$id', `${id}`),
          updateServiceParams,
        );

        setUpdateServiceParams({
          wifiName: '',
          link: '',
        });

        setIsShowSuccessPopup(true);
      } catch (err) {
        handleError(err);
      }
    },
    [updateServiceParams],
  );

  /** ポップアップを閉じる */
  const closeSuccessPopup = useCallback(() => {
    setIsShowSuccessPopup(false);
  }, []);

  return {
    updateServiceParams,
    changeWifiName,
    changeLink,
    requestUpdateService,
    isShowSuccessPopup,
    closeSuccessPopup,
  };
};

export default useUpdateService;
