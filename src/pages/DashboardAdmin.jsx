import "../assets/css/DashboardAdmin.css";
import AdminLayout from "../layout/AdminLayout";
import Index from "./admin/artikel";

function DashboardAdmin() {

  return (
    <>
          <AdminLayout>
          <Index />
          </AdminLayout>
     
    </>
  );
}

export default DashboardAdmin;
