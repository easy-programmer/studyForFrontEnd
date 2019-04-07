import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Gallery from './Gallery';
import * as serviceWorker from './serviceWorker';

// 첫번째 파라미터는 렌더링 할 결과물이고, 두번째 파라미터는 컴포넌트를 어떤 DOM  에 그릴지 정해줍니다.
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Gallery />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
