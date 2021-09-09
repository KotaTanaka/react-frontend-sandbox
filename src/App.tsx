import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'src/components/partials/Header';
import SideBar from 'src/components/partials/SideBar';
import { PAGES } from 'src/constants/page';
import AreaRegisterPage from 'src/pages/AreaRegisterPage';
import AreasPage from 'src/pages/AreasPage';
import ConvertValuePage from 'src/pages/ConvertValuePage';
import CounterPage from 'src/pages/CounterPage';
import ReviewsPage from 'src/pages/ReviewsPage';
import ServiceDetailPage from 'src/pages/ServiceDetailPage';
import ServiceRegisterPage from 'src/pages/ServiceRegisterPage';
import ServicesPage from 'src/pages/ServicesPage';
import ShopDetailPage from 'src/pages/ShopDetailPage';
import ShopRegisterPage from 'src/pages/ShopRegisterPage';
import ShopsPage from 'src/pages/ShopsPage';
import TopPage from 'src/pages/TopPage';
import { Provider } from 'src/store/Context';

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
              <Route exact path="/convert" component={ConvertValuePage} />
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
