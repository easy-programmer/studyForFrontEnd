import React from 'react';
import ReactDOM from 'react-dom';
 
const title = 'React Project is working?!';
 
ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('root')
);

if (module.hot) {
    module.hot.accept(() => {
        const nextRootReducer = require("../reducers").default;
        store.replaceReducer(nextRootReducer);
    });
}