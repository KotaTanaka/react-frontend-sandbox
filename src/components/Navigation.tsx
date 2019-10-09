import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

/**
 * ナビゲーションバー
 * @author kotatanaka
 */
const Navigation: React.FC = () => {
  let location = useLocation()

  /** 画面が移動するたびに行う処理 */
  useEffect(() => {
    const { pathname, search } = location;
    console.log(pathname);
    if (search) {
      console.log(search)
    }
  }, [location]);

  /** リンク */
  const link = (path: string, label: string) => (
    <li>
      <Link to={path}>{label}</Link>
    </li>
  );

  return (
    <ul>
      {link("/", "ホーム")}
      {link("/services", "Wi-Fiサービス一覧")}
    </ul>
  );
}

export default Navigation;
