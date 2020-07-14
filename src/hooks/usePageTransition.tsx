import { useCallback } from 'react';
import { useHistory } from 'react-router';

// from app
import { PAGES } from 'src/constants/page';

interface IUserPageTransitionProps {
  moveTo: (to: string) => void;
  moveToHome: () => void;
  moveToAreaList: () => void;
  moveToRegisterArea: () => void;
  moveToServiceList: () => void;
  moveToServiceDetail: (id: number) => void;
  moveToRegisterService: () => void;
  moveToShopList: () => void;
  moveToShopDetail: (id: number) => void;
  moveToRegisterShop: () => void;
  moveToReviewList: () => void;
}

/** ページ遷移カスタムフック */
const usePageTransition = (): IUserPageTransitionProps => {
  const history = useHistory();

  /** 指定したパス */
  const moveTo = useCallback(
    (to: string) => {
      history.push(to);
    },
    [history],
  );

  /** ホーム */
  const moveToHome = useCallback(() => {
    history.push(PAGES.HOME.path);
  }, [history]);

  /** エリア一覧 */
  const moveToAreaList = useCallback(() => {
    history.push(PAGES.AREAS.path);
  }, [history]);

  /** エリア登録 */
  const moveToRegisterArea = useCallback(() => {
    history.push(PAGES.AREAS_REGISTER.path);
  }, [history]);

  /** Wi-Fiサービス一覧 */
  const moveToServiceList = useCallback(() => {
    history.push(PAGES.SERVICES.path);
  }, [history]);

  /** Wi-Fiサービス詳細 */
  const moveToServiceDetail = useCallback(
    (id: number) => {
      history.push(PAGES.SERVICES_DETAIL.path.replace(':serviceId', `${id}`));
    },
    [history],
  );

  /** Wi-Fiサービス登録 */
  const moveToRegisterService = useCallback(() => {
    history.push(PAGES.SERVICES_REGISTER.path);
  }, [history]);

  /** 店舗一覧 */
  const moveToShopList = useCallback(() => {
    history.push(PAGES.SHOPS.path);
  }, [history]);

  /** 店舗詳細 */
  const moveToShopDetail = useCallback(
    (id: number) => {
      history.push(PAGES.SHOPS_DETAIL.path.replace(':shopId', `${id}`));
    },
    [history],
  );

  /** 店舗登録 */
  const moveToRegisterShop = useCallback(() => {
    history.push(PAGES.SHOPS_REGISTER.path);
  }, [history]);

  /** レビュー一覧 */
  const moveToReviewList = useCallback(() => {
    history.push(PAGES.REVIEWS.path);
  }, [history]);

  return {
    moveTo,
    moveToHome,
    moveToAreaList,
    moveToRegisterArea,
    moveToServiceList,
    moveToServiceDetail,
    moveToRegisterService,
    moveToShopList,
    moveToShopDetail,
    moveToRegisterShop,
    moveToReviewList,
  };
};

export default usePageTransition;
