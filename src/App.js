import React, { Component } from 'react';
import {  BrowserRouter, Route } from 'react-router-dom';
import './style';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Login from './pages/login';
import store from './store';
import Outer from './components/outer';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={{height:'100%'}}>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/token/:token' exact component={Outer}></Route>
        </div>
      </BrowserRouter>
     </Provider>
    );
  }
}

export default App;
