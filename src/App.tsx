import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// from app
import Navigation from 'components/Navigation';
import TopPage from 'pages/TopPage';
import ServicesPage from 'pages/ServicesPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/services">
            <ServicesPage />
          </Route>
          <Route path="/">
            <TopPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
