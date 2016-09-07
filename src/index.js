import React from 'react';
import ReactDOM from 'react-dom';
import {Router , Route, indexRoute, hashHistory} from 'react-router';
import App from './App';
import WordComponent from './components/WordComponent';
import AlphabetDifficultySelection from './components/alphabetDifficultySelection';
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}></Route>
    <Route path='/level/:key' component={AlphabetDifficultySelection}></Route>
    <Route path = '/words/:key/:diff' component= {WordComponent}></Route>


  </Router>
  ,document.getElementById('app')
);
