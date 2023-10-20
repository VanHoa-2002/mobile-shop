import { HomePage } from "../HomePage/HomePage";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { OrderPage } from "../OrderPage/OrderPage";
import { ProductPage } from "../ProductPage/ProductPage";

const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: ProductPage,
    isShowHeader: true,
  },
  {
    path: "/orders",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
export default routes;
