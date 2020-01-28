import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// from app
import { Provider } from 'src/Store';
import Header from 'src/components/Header';
import TopPage from 'src/pages/TopPage';
import ServicesPage from 'src/pages/ServicesPage';
import ServiceDetailPage from 'src/pages/ServiceDetailPage';
import CounterPage from 'src/pages/CounterPage';

const App: React.FC = () => {
  return (
    <Provider>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={TopPage} />
            <Route exact path="/services" component={ServicesPage} />
            {/* prettier-ignore */}
            <Route exact path="/services/:serviceId" component={ServiceDetailPage} />
            <Route exact path="/counter" component={CounterPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
