import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Usuario from './pages/Usuario';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/usuario" component={Usuario} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
