import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>   {/* higher order component, injects props into children (here App) */}
      <App />    {/* look in StateProvider.js: state provider takes two inputs: reducer and initialstate and these variables hold the corresponding value from reducer and initial state of reducer.js*/}
    </StateProvider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
