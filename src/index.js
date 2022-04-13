import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import RandomData from './RandomData'

export default class MainApp extends Component {

  render() {
    return (
      <BrowserRouter basename={'/'}>
        <Switch>
          <Route exact={true} path="/" component={App} />
          <Route path="/RandomData" component={RandomData} />
        </Switch>
      </BrowserRouter>
    )
  }
}


ReactDOM.render(<MainApp/>,document.getElementById('root'));

