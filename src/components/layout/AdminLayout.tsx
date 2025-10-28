import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      <p>this is admin layout</p>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
