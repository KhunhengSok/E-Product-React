import ProductStore from "../../pages/frontend/product/productStore";
import ProductDetail from "../../pages/frontend/product/ProductDetail";

const routes = [

    {
        path: "/store",
        name: "ProductStore",
        component: ProductStore,
        layout: "/product"
    },

    {
        path: "/product-detail",
        name: "ProductDetail",
        component: ProductDetail,
        layout: "/product"
    },

];

export default routes;