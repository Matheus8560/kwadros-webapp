import React from 'react';
import ReactDOM from 'react-dom';
import { NotificationContainer } from 'react-notifications';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'react-notifications/lib/notifications.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <NotificationContainer />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
