import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const renderEntireThree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider value = {store} >
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

renderEntireThree();
store.subscribe(renderEntireThree);
reportWebVitals();

/* npm install react-router-dom --save
   npm install redux --save
   npm install react-redux --save
*/