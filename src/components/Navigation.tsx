import React from 'react';
import { Link } from "react-router-dom";

/**
 * ナビゲーションバー
 * @author kotatanaka
 */
const Navigation: React.FC = () => {
  return (
    <ul>
      <li>
        <Link to="/">ホーム</Link>
      </li>
      <li>
        <Link to="/services">Wi-Fiサービス一覧</Link>
      </li>
    </ul>
  );
}

export default Navigation;
