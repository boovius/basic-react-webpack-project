var React = require('react');
var ReactDOM = require('react-dom');
var Greeting = require('./greeting');

ReactDOM.render(
  <Greeting name="josh"/>,
  document.getElementById('container')
);

