import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './main.scss';

import SideBar from '../Sidebar/Sidebar';
import Login from '../Login/Login';

class Main extends Component {

  render() {
    return (
      <div className='main__container'>
        <SideBar />
        <div>
          <Switch>
            <Route exact path='/' component={() => (<div>Main</div>)} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
