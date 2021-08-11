import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

const WithRoute = () => {
  return (
    <Router>
      <App/>
    </Router>
  );
}
ReactDOM.render(
  <WithRoute/>,
  document.getElementById('root')
);


reportWebVitals();
