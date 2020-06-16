import { useCallback } from 'react';
import { useHistory } from 'react-router';

interface IUserPageTransitionProps {
  moveToHome: () => void;
  moveToServiceList: () => void;
  moveToRegisterService: () => void;
  moveToShopList: () => void;
  moveToRegisterShop: () => void;
  moveToReviewList: () => void;
}

/** ページ遷移カスタムフック */
const usePageTransition = (): IUserPageTransitionProps => {
  const history = useHistory();

  /** ホーム */
  const moveToHome = useCallback(() => {
    history.push('/');
  }, [history]);

  /** Wi-Fiサービス一覧 */
  const moveToServiceList = useCallback(() => {
    history.push('/services');
  }, [history]);

  /** Wi-Fiサービス登録 */
  const moveToRegisterService = useCallback(() => {
    history.push('/services/register');
  }, [history]);

  /** 店舗一覧 */
  const moveToShopList = useCallback(() => {
    history.push('/shops');
  }, [history]);

  /** 店舗登録 */
  const moveToRegisterShop = useCallback(() => {
    history.push('/shops/register');
  }, [history]);

  /** レビュー一覧 */
  const moveToReviewList = useCallback(() => {
    history.push('/reviews');
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

export default usePageTransition;
