import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// from app
import { Provider } from 'src/Store';
import { PAGES } from 'src/constants/page';
import Header from 'src/components/partials/Header';
import SideBar from 'src/components/partials/SideBar';
import TopPage from 'src/pages/TopPage';
import ServicesPage from 'src/pages/ServicesPage';
import ServiceRegisterPage from 'src/pages/ServiceRegisterPage';
import ServiceDetailPage from 'src/pages/ServiceDetailPage';
import CounterPage from 'src/pages/CounterPage';

const App: React.FC = () => {
  return (
    <Provider>
      <Router>
        <AppContainer>
          <Header />
          <SideBar />
          <Body>
            <Switch>
              <Route exact path={PAGES.HOME.path} component={TopPage} />
              <Route
                exact
                path={PAGES.SERVICES.path}
                component={ServicesPage}
              />
              <Route
                exact
                path={PAGES.SERVICES_REGISTER.path}
                component={ServiceRegisterPage}
              />
              <Route
                exact
                path={PAGES.SERVICES_DETAIL.path}
                component={ServiceDetailPage}
              />
              <Route exact path="/counter" component={CounterPage} />
            </Switch>
          </Body>
        </AppContainer>
      </Router>
    </Provider>
  );
};

// styles
const AppContainer = styled.div``;
const Body = styled.div`
  margin: 64px 0 0 240px;
`;

export default App;
