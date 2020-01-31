import React from "react";
import { Route, Switch } from "react-router-dom";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";


//core component
import Sidebar from "../../components/backend/Sidebar/Sidebar";
import NavigationBar from "../../components/backend/Navbars/Navbar";
import FooterBackend from "../../components/backend/FooterBackend/FooterBackend";

import dashboardRoutes  from "../../routes/backend/routes";
import logo from "../../assets/img/react-logo.png";
import FixedPlugin from "../../components/backend/FixedPlugin/FixedPlugin";

var ps;

class DashboardLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "blue",
            sidebarOpened:
                document.documentElement.className.indexOf("nav-open") !== -1
        };

    }
    componentDidMount() {

        // eslint-disable-next-line no-unused-expressions
        import('../../assets/scss/dashboardStyle/black-dashboard-react.scss');
        // eslint-disable-next-line no-unused-expressions
        import('../../assets/scss/dashboardStyle/nucleo-icons.scss');

        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
    }

    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
            document.documentElement.className += " perfect-scrollbar-off";
            document.documentElement.classList.remove("perfect-scrollbar-on");
        }
    }

    componentDidUpdate(e) {
        if (e.history.action === "PUSH") {
            if (navigator.platform.indexOf("Win") > -1) {
                let tables = document.querySelectorAll(".table-responsive");
                for (let i = 0; i < tables.length; i++) {
                    ps = new PerfectScrollbar(tables[i]);
                }
            }
            document.documentElement.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
            this.refs.mainPanel.scrollTop = 0;
        }
    }
    // this function opens and closes the sidebar on small devices
    toggleSidebar = () => {
        document.documentElement.classList.toggle("nav-open");
        this.setState({ sidebarOpened: !this.state.sidebarOpened });
    };

    getRoutes = (routes) => {

        return routes.map((prop, key) => {
            if(prop.layout === "/admin") {
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

    handleBgClick = color => {
        this.setState({
            backgroundColor: color
        });
    };
    getBrandText = path => {
        for(let i = 0; i< dashboardRoutes.length; i++) {
            if(
                this.props.location.pathname.indexOf(
                    dashboardRoutes[i].layout + dashboardRoutes[i].path
                ) !== -1
            ) {
                return dashboardRoutes[i].name;
            }
        }
        return "Brand";
    };

    render() {
        return(
            <>
                <div className="wrapper">
                    <Sidebar
                        { ...this.props }
                        routes={ dashboardRoutes }
                        bgColor={this.state.backgroundColor}
                        logo={ {
                            outterLink: "https://www.creative-tim.com/",
                            text: "Creative Tim",
                            imgSrc: logo
                        }}
                        toggleSidebar = {this.toggleSidebar}
                    />

                    <div
                        className="main-panel"
                        ref="mainPanel"
                        data={this.state.backgroundColor}
                    >
                        <NavigationBar
                            { ...this.props }
                            brandText = {this.getBrandText(this.props.location.pathname)}
                            toggleSidebar = {this.toggleSidebar}
                            sidebarOpened = {this.state.sidebarOpened}
                        />

                        <Switch>
                            { this.getRoutes(dashboardRoutes)}
                        </Switch>
                        <FooterBackend fluid/>
                    </div>
                </div>
                <FixedPlugin
                    bgColor = { this.state.backgroundColor}
                    handleBgClick = { this.handleBgClick}
                />
            </>
        );
    }
}

export default DashboardLayout;