// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';

const App = () => (
  <div className='application'>Hello, world.</div>
);

ReactDOM.render(<App />, document.getElementById('app'));
