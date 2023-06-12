import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registrasi from "./pages/Registrasi";
import Home from "./pages/LandingPage";
export const apiEndPoint = "https://647c25b9c0bae2880ad06ad3.mockapi.io/";

function App() {
	return (
		<div style={{ fontFamily: "Poppins, sans-serif" }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/" element={<Login />} />
					<Route path="/registrasi" element={<Registrasi />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
