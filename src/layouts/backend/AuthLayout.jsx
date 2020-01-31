import React from "react";
import { Route, Switch } from "react-router-dom";

import "../../assets/scss/defaultStyle/util.scss";
import "../../pages/backend/auth/register_login.scss";

import authRoutes from "../../routes/backend/authRoutes";

const  getRoutes = routes => {

    return routes.map((prop, key) => {

        if(prop.layout === "/auth/admin") {
            return (
                <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                />
            );

        } else {
            return null;
        }

    });
};

const AuthLayout = () => {

    return(
        <div>
            <Switch>
                { getRoutes(authRoutes)}
            </Switch>
        </div>
    );
};

export default AuthLayout;