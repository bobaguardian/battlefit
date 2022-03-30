import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ModalProvider } from './context/Modal';
import './index.css';
import App from './App';
import configureStore from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import UploadImage from './components/UploadImage';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/admin-upload-image">
              <UploadImage />
            </Route> */}
            <Route>
              <App />
            </Route>
          </Switch>
        </BrowserRouter>
      </ModalProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
