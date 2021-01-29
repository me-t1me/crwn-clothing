import React from 'react';
import './App.css';
import { Route , Switch  } from 'react-router-dom';

import HomePage from './pages/homepages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route path = '/shop' component = {ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
