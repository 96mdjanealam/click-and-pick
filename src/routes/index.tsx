import App from "@/App";
// import AdminLayout from "@/components/layout/AdminLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";
import { generateRoutes } from "@/utils/generateRoutes";
import { adminSideBarItems } from "./adminSidebarItems";
import { userSideBarItems } from "./userSidebarItems";

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
    Component: DashboardLayout,
    path: "/admin",
    children: [...generateRoutes(adminSideBarItems)],
  },
  {
    Component: DashboardLayout,
    path: "/user",
    children: [...generateRoutes(userSideBarItems)],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);
