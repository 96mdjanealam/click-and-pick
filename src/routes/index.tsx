import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import About from "@/pages/About";
import Analytics from "@/pages/Analytics";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/about",
        Component: About,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        path: "/admin/analytics",
        Component: Analytics,
      },
    ],
  },
]);
