import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// from app
import { Provider } from 'Store';
import Header from 'components/Header';
import TopPage from 'pages/TopPage';
import ServicesPage from 'pages/ServicesPage';
import ServiceDetailPage from 'pages/ServiceDetailPage';
import CounterPage from 'pages/CounterPage';

const App: React.FC = () => {
  return (
    <Provider>
      <Router>
        <div>
          <Header />
          <Switch>
            {/* トップページ */}
            <Route exact path="/" component={TopPage} />
            {/* Wi-Fiサービス一覧 */}
            <Route exact path="/services" component={ServicesPage} />
            {/* Wi-Fiサービス詳細 */}
            <Route
              exact
              path="/services/:serviceId"
              component={ServiceDetailPage}
            />
            {/* カウンターアプリ */}
            <Route exact path="/counter" component={CounterPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
