import React from 'react';

import ReactDOM from 'react-dom';

  

const title = 'React Project';
const test = 'React Project2';

  

ReactDOM.render(

  <div id = 'div1'>{title}</div>,

  document.getElementById('root')

);

ReactDOM.render(

    <div>{test}</div>,
  
    document.getElementById('div1')
  
  );