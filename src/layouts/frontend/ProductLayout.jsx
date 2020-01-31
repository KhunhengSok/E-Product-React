import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import "../../assets/scss/defaultStyle/defaultStyle.scss";

import routes from "../../routes/frontend/routesProduct";

class ProductLayout extends React.Component {

    //we want to get component via routing
    getRoutes = routes => {

        return routes.map((prop, key) => {

            if(prop.layout === "/product" ) {
                return(
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

    render() {
        return(
            <div>
                <Header/>
                <Switch>
                    {this.getRoutes(routes)}
                </Switch>
                <Footer/>
            </div>
        );
    }

}

export default ProductLayout;