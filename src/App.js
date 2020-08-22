import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homepage';
import Header from './components/header/header.component';
import CountrySummary from './pages/summary/countrySummary.page'

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:country" component={CountrySummary} />
    </div>
  );
}

export default App;