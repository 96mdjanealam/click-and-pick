import { role } from "@/constants/role";
import { adminSideBarItems } from "@/routes/adminSidebarItems";
import { userSideBarItems } from "@/routes/userSidebarItems";
import type { TRole } from "@/types";

export const getSideBarItems = (roleType: TRole) => {
  switch (roleType) {
    case role.admin:
      return adminSideBarItems;
    case role.user:
      return userSideBarItems;
    default:
      return [];
  }
};
