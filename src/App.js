import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

const App = () => {
  return(
    <div>
      <Route path="/" exact component={HomePage} />
    </div>
  )
}

export default App;
