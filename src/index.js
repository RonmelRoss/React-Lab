import React from 'react';
import ReactDOM from 'react-dom';

const myelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
    <li>This is an expression: {10+10}</li>
  </ul>
);

//const secondElement = <input type="text" />;

ReactDOM.render(myelement, document.getElementById('root'));
//ReactDOM.render(secondElement, document.getElementById('input-value'));