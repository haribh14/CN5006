import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GreetingElementwithProp from '../../nop/src/Mygreetingprop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <GreetingElementwithProp msg="Hi, it’s Monday" />
    <GreetingElementwithProp msg="Hi, it’s Tuesday" />
    <GreetingElementwithProp msg="Hi, it’s Wednesday" />
    <GreetingElementwithProp msg="Hi, it’s Thursday" />
    <GreetingElementwithProp msg="Hi, it’s Friday" />
    <GreetingElementwithProp msg="Hi, it’s Saturday" />
    <GreetingElementwithProp msg="Hi, it’s Sunday" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
