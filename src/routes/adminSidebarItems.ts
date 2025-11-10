import AllUsers from "@/pages/admin/AllUsers";
import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItem } from "@/types";

export const adminSideBarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Users",
    items: [
      {
        title: "User Management",
        url: "/admin/all-users",
        component: AllUsers,
      },
    ],
  },
];
