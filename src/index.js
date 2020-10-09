import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar';

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
  