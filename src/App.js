import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component'
function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
    </div>
  );
}


export default App;