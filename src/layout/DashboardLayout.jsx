
import NavbarLogin from "../components/NavbarLogin"

function DashboardLayout({children}) {
  return (
    <>
    <section className="dashboard-layout">
        <NavbarLogin />
        {children}
    </section>
    </>
  )
}

export default DashboardLayout