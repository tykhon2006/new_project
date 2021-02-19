import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import { BrowserRouter } from 'react-router-dom';

const renderEntireThree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch = {store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

renderEntireThree(store.getState());
store.subscribe(()=>{
  let state = store.getState();
  renderEntireThree(state);
})
reportWebVitals();

/* npm install react-router-dom --save 
   npm install redux --save
*/