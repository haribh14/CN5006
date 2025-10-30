import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GreetingElementwithProp from './Mygreetingprop';
import AppColor from './AppbackgroundColor';

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
    <AppColor heading="This is first element" lbl="Name :" color="green"/>
 <AppColor heading="This is second element" lbl="Name :" color="blue"/>
 <AppColor heading="This is third third element" lbl="Name :" color="Yellow"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
