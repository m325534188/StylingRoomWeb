import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Nav from './Nav';
import GoToPayment from './GoToPayment';

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 200);

  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <Nav />
        </div>
      </div>
    </Provider>
  );
}


