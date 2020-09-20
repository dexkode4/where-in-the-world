import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homepage';
import Header from './components/header/header.component';
import CountrySummary from './pages/summary/countrySummary.page'
import BorderCountry from './border.country';
// import CountryByRegion from './pages/region/region'

function App() {



  return (
    <div>
      <Header />
      <Switch>
        {/* <Route path="/border/:country">
          <BorderCountry />
        </Route> */}
        <Route path="/:country">
          <CountrySummary />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;