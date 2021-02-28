import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storeContext from './storeContext';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import { BrowserRouter } from 'react-router-dom';

const renderEntireThree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <storeContext.Provider value = {store} >
        <App />
      </storeContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

renderEntireThree();
store.subscribe(renderEntireThree);
reportWebVitals();

/* npm install react-router-dom --save
   npm install redux --save
*/