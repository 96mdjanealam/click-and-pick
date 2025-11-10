import MyParcel from "@/pages/user/MyParcel";
import type { ISidebarItem } from "@/types";

export const userSideBarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "My Parcels",
        component: MyParcel,
        url: "/user/parcels",
      },
    ],
  },
];
