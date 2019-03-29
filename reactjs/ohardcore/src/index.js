import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/*
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


//const title = 'React Project is working?!';
let text = '';
const rawResponse = axios.get('https://api.github.com/users/maecapozzi')
        .then(response => text = response.data.name);


ReactDOM.render(
  <div>{text}</div>,
  document.getElementById('root')
);
*/
