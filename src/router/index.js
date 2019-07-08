import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';

import home from "@/pages/home/home";
const content = asyncComponent(() => import("@/pages/content/content"));
// const helpcenter = asyncComponent(() => import("@/pages/helpcenter/helpcenter"));
// const production = asyncComponent(() => import("@/pages/production/production"));
// const balance = asyncComponent(() => import("@/pages/balance/balance"));

export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/content" component={content} />
          {/*<Route path="/helpcenter" component={helpcenter} />*/}
          {/*<Route path="/production" component={production} />*/}
          {/*<Route path="/balance" component={balance} />*/}
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
