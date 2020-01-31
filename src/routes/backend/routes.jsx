import DashboardPage from "../../pages/backend/dashboard/DashboardPage";
import DataList from "../../pages/backend/dashboard/List";

const dashboardRoutes = [

    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "tim-icons icon-chart-pie-36",
        component: DashboardPage,
        layout: "/admin"
    },

    {
        path: "/datalist",
        name: "Data-List",
        icon: "tim-icons icon-puzzle-10",
        component: DataList,
        layout: "/admin"
    },

];

export default dashboardRoutes;