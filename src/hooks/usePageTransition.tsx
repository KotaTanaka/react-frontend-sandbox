import { useCallback } from 'react';
import { useHistory } from 'react-router';

// from app
import { PAGES } from 'src/constants/page';

interface IUserPAGESTransitionProps {
  moveToHome: () => void;
  moveToServiceList: () => void;
  moveToRegisterService: () => void;
  moveToShopList: () => void;
  moveToRegisterShop: () => void;
  moveToReviewList: () => void;
}

/** ページ遷移カスタムフック */
const usePAGESTransition = (): IUserPAGESTransitionProps => {
  const history = useHistory();

  /** ホーム */
  const moveToHome = useCallback(() => {
    history.push(PAGES.HOME.path);
  }, [history]);

  /** Wi-Fiサービス一覧 */
  const moveToServiceList = useCallback(() => {
    history.push(PAGES.SERVICES.path);
  }, [history]);

  /** Wi-Fiサービス登録 */
  const moveToRegisterService = useCallback(() => {
    history.push(PAGES.SERVICES_REGISTER.path);
  }, [history]);

  /** 店舗一覧 */
  const moveToShopList = useCallback(() => {
    history.push(PAGES.SHOPS.path);
  }, [history]);

  /** 店舗登録 */
  const moveToRegisterShop = useCallback(() => {
    history.push(PAGES.SHOPS_REGISTER.path);
  }, [history]);

  /** レビュー一覧 */
  const moveToReviewList = useCallback(() => {
    history.push(PAGES.REVIEWS.path);
  }, [history]);

  return {
    moveToHome,
    moveToServiceList,
    moveToRegisterService,
    moveToShopList,
    moveToRegisterShop,
    moveToReviewList,
  };
};

export default usePAGESTransition;
