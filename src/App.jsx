
import { useSelector } from "react-redux";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import TentangKami from './pages/TentangKami';
import Artikel from './pages/Artikel';
import DetailArtikel from './pages/DetailArtikel';
import Pelaporan from './pages/formPelaporan'


function App() {
  const store = useSelector((state) => state.users);
  console.log(store)
  return (
    <>
      <BrowserRouter>
      {
        store.authStatus ? 
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/tentangKami" element={<TentangKami />}  />
          <Route exact path="/artikel" element={<Artikel />}  />
          <Route exact path="/detail/:id" element={<DetailArtikel />} />
          <Route exact path="/pelaporan" element={<Pelaporan data="send"/>} />
        </Routes>
        : 
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/tentangKami" element={<TentangKami />}  />
          <Route exact path="/artikel" element={<Artikel />}  />
          <Route exact path="/detail/:id" element={<DetailArtikel />} />
          <Route exact path="/pelaporan" element={<Pelaporan />} />
        </Routes>
      }
      </BrowserRouter>
    </>
  );
}

export default App;
