import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Viewproduct from "../pages/Viewproduct";
import Header from "../components/Header/Header";
import Contact from "../pages/Contact";
import Loginadmin from "../pages/Loginadmin";
import Register from "../pages/RegisterForm";
import RedirectAuthenticated from "../features/auth/RedirectAuthenticated";
import Authenticated from "../features/auth/Authenticate";
import CreateProduct from "../pages/CreateProduct";

import AdminPage from "../pages/AdminPage";
import EditProduct from "../pages/EditProduct";
import CheckoutPage from "../pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectAuthenticated>
        <Header />
        <Outlet />
      </RedirectAuthenticated>
    ),
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <Authenticated>
        <Header />
        <Outlet />
      </Authenticated>
    ),
    children: [
      {
        path: "home",
        element: <Homepage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "viewproduct/:productId",
        element: <Viewproduct />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "foradmin",
        element: <Loginadmin />,
      },
      {
        path: "create",
        element: <CreateProduct />,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
      {
        path: "editproduct/:productId",
        element: <EditProduct />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);
export default function Route() {
  return <RouterProvider router={router} />;
}
