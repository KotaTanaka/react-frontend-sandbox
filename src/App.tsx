import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// from app
import Navigation from 'components/Navigation';
import TopPage from 'pages/TopPage';
import ServicesPage from 'pages/ServicesPage';
import ServiceDetailPage from 'pages/ServiceDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          {/* Wi-Fiサービス詳細 */}
          <Route path="/services/:serviceId">
            <ServiceDetailPage />
          </Route>
          {/* Wi-Fiサービス一覧 */}
          <Route path="/services">
            <ServicesPage />
          </Route>
          {/* トップページ */}
          <Route path="/">
            <TopPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
