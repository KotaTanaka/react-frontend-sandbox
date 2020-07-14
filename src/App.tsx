import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// from app
import { Provider } from 'src/Store';
import { PAGES } from 'src/constants/page';
import Header from 'src/components/partials/Header';
import SideBar from 'src/components/partials/SideBar';
import TopPage from 'src/pages/TopPage';
import AreasPage from 'src/pages/AreasPage';
import AreaRegisterPage from 'src/pages/AreaRegisterPage';
import ServicesPage from 'src/pages/ServicesPage';
import ServiceRegisterPage from 'src/pages/ServiceRegisterPage';
import ServiceDetailPage from 'src/pages/ServiceDetailPage';
import ShopsPage from 'src/pages/ShopsPage';
import ShopRegisterPage from 'src/pages/ShopRegisterPage';
import ShopDetailPage from 'src/pages/ShopDetailPage';
import ReviewsPage from 'src/pages/ReviewsPage';
import CounterPage from 'src/pages/CounterPage';

const App: React.FC = () => {
  // prettier-ignore
  return (
    <Provider>
      <Router>
        <AppContainer>
          <Header />
          <SideBar />
          <Body>
            <Switch>
              <Route exact path={PAGES.HOME.path} component={TopPage} />
              <Route exact path={PAGES.AREAS.path} component={AreasPage} />
              <Route exact path={PAGES.AREAS_REGISTER.path} component={AreaRegisterPage} />
              <Route exact path={PAGES.SERVICES.path} component={ServicesPage} />
              <Route exact path={PAGES.SERVICES_REGISTER.path} component={ServiceRegisterPage} />
              <Route exact path={PAGES.SERVICES_DETAIL.path} component={ServiceDetailPage} />
              <Route exact path={PAGES.SHOPS.path} component={ShopsPage} />
              <Route exact path={PAGES.SHOPS_REGISTER.path} component={ShopRegisterPage} />
              <Route exact path={PAGES.SHOPS_DETAIL.path} component={ShopDetailPage} />
              <Route exact path={PAGES.REVIEWS.path} component={ReviewsPage} />
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
