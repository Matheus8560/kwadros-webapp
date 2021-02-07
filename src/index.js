import React from 'react';
import ReactDOM from 'react-dom';
import { NotificationContainer } from 'react-notifications';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import Usuario from './pages/Usuario';
import reportWebVitals from './reportWebVitals';

import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
       <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={App} />
                    <Route path="/usuario" component={Usuario} />
                </Switch>
            </BrowserRouter>
        </Provider>
        <NotificationContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
