import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library';
import Clock from './chapter_03/Clock';
import Welcome from './chapter_05/Welcome';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
//import Counter from './Counter';
import FocusButton from './FocusButton';
import useCounter from './chapter_07/Accommodate.jsx/Accomodate';
import MyButton from './MyButton';
//import LoginControl from './LoginControl';
//const element = <Welcome name="인제" />
import LandingPage from './LandingPage';
import SignUp from './SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <SignUp />
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
