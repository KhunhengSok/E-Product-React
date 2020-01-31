import LoginForm from "../../pages/backend/auth/Login";
import RegisterForm from "../../pages/backend/auth/Register";
import ProductStore from "../../pages/frontend/product/productStore";

const authRoutes = [

    {
        path: "/login",
        name: "LoginAdmin",
        component: LoginForm,
        layout: "/auth/admin"
    },

    {
        path: "/register",
        name: "RegisterAdmin",
        component: RegisterForm,
        layout: "/auth/admin"
    },

];

export default authRoutes;