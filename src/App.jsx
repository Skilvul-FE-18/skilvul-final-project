
import { useSelector } from "react-redux";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import TentangKami from './pages/TentangKami';
import Artikel from './pages/Artikel';
import DetailArtikel from './pages/DetailArtikel';
import DashboardAdmin from "./pages/DashboardAdmin";
import FormPelaporan from "./pages/FormPelaporan";
import Create from "./pages/admin/artikel/create";
import Update from "./pages/admin/artikel/update";
import EditProfil from './pages/EditProfil';


function App() {
  const store = useSelector((state) => state.users);
  console.log(store)
  console.log("test")
  return (
    <>
      {/* <BrowserRouter>
      {
        store.authStatus ? 
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/tentangKami" element={<TentangKami />}  />
          <Route exact path="/artikel" element={<Artikel />}  />
          <Route exact path="/detail/:id" element={<DetailArtikel />} />
          <Route exact path="/formLaporan" element={<FormPelaporan data="send" />} />
          <Route exact path="/profile/:id" element={<EditProfil />} />
          
        </Routes> 
        : 
        <Routes>
           <Route exact path="/profile/:id" element={<EditProfil />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/tentangKami" element={<TentangKami />}  />
          <Route exact path="/artikel" element={<Artikel />}  />
          <Route exact path="/detail/:id" element={<DetailArtikel />} />
          <Route exact path="/formLaporan" element={<FormPelaporan />} />
        </Routes>
      }
      <Routes>
        <Route exact path="/admin/artikel" element={<DashboardAdmin />} />
        <Route exact path="/admin/artikel/create" element={<Create />} />
        <Route exact path="/admin/artikel/update/:id" element={<Update />} />
      </Routes>
      
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/tentangKami" element={<TentangKami />} />
          <Route exact path="/artikel" element={<Artikel />} />
          <Route exact path="/detail/:id" element={<DetailArtikel />} />
          <Route exact path="/formLaporan" element={<FormPelaporan data="send" />} />
          <Route exact path="/profile/:id" element={<EditProfil />} />

          {store.authStatus && (
            <Route path="/admin" element={<DashboardAdmin />}>
              <Route exact path="artikel" element={<DashboardAdmin />} />
              <Route exact path="artikel/create" element={<Create />} />
              <Route exact path="artikel/update/:id" element={<Update />} />
            </Route>
          )}

          {!store.authStatus && (
            <Route path="/admin" element={<DashboardAdmin />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
