import React from 'react';
import { Link } from "react-router-dom";

/**
 * ナビゲーションバー
 * @author kotatanaka
 */
const Navigation: React.FC = () => {
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
