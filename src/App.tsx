import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// from app
import { Provider } from 'src/Store';
import Header from 'src/components/Header';
import SideBar from 'src/components/SideBar';
import TopPage from 'src/pages/TopPage';
import ServicesPage from 'src/pages/ServicesPage';
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
              <Route exact path="/" component={TopPage} />
              <Route exact path="/services" component={ServicesPage} />
              {/* prettier-ignore */}
              <Route exact path="/services/detail/:serviceId" component={ServiceDetailPage} />
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
