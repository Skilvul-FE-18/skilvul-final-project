
import NavbarLogin from "../components/NavbarLogin"
import SideNavbar from "../components/SideNavbar"

function DashboardLayout({children}) {
  return (
    <>
    {/* <div className="container-fluid"> */}
      {/* <div className="row min-vh-100 flex-column flex-md-row"> */}
      <SideNavbar />
      {children}
    {/* <div className="main col py-3">
    </div> */}
      {/* </div> */}
    {/* </div> */}
    </>
  )
}

export default DashboardLayout