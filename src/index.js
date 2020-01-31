import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import HomeLayout from "./layouts/frontend/HomeLayout";
import DashboardLayout from "./layouts/backend/DashboardLayout";
import AuthLayout from "./layouts/backend/AuthLayout";
import ProductLayout from "./layouts/frontend/ProductLayout";

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={ history }>
        <Switch>
            <Route exact path="/" render={props => <HomeLayout { ...props } />}/>
            <Route path="/admin" render={props => <DashboardLayout { ...props } />}/>
            <Route path="/auth" render={ props => <AuthLayout { ...props } />}/>
            <Route path="/product" render={ props => <ProductLayout { ...props } />}/>

            <Redirect from={"/x"} to={"/"}/>
        </Switch>
    </Router>
    ,document.getElementById('root')
);
