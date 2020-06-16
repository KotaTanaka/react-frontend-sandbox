import { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';

interface IUserPageTransitionProps {
  moveToHome: () => void;
  moveToServices: () => void;
}

/** ページ遷移カスタムフック */
const usePageTransition = (): IUserPageTransitionProps => {
  const location = useLocation();
  const history = useHistory();

  /** 画面が移動するたびに行う処理 */
  useEffect(() => {
    const { pathname, search } = location;
    console.log(pathname);
    if (search) {
      console.log(search);
    }
  }, [location]);

  const moveToHome = useCallback(() => {
    history.push('/');
  }, [history]);

  const moveToServices = useCallback(() => {
    history.push('/services');
  }, [history]);

  return {
    moveToHome,
    moveToServices,
  };
};

export default usePageTransition;
