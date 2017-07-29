import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Activities, Drivers, Home, Profile, Vehicles } from './screens';
import { NavMenu } from './components';

class Router extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <NavMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/activities" component={Activities} />
            <Route path="/drivers" component={Drivers} />
            <Route path="/profile" component={Profile} />
            <Route path="/vehicles" component={Vehicles} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Router;